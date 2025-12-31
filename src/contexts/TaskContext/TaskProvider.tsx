import { type ReactNode, useEffect, useMemo, useReducer, useRef } from 'react';
import { loadBeep }                                               from '../../utils/loadBeep.ts';
import { TimerWorkerManager }                                     from '../../workers/TimerWorkerManager.ts';
import { initialTaskState }                                       from './initialTaskState.ts';
import { TaskActionTypes }                                        from "./taskActionsTypes.ts";
import { TaskContext }                                            from "./TaskContext.tsx";
import { taskReducer }                                            from './taskReducer.ts';

type TaskProviderProps = { children?: ReactNode };

export function TaskProvider({children}: TaskProviderProps) {
  const storageState = () => {
    const storagedState = localStorage.getItem('chronos-pomodoro:state');
    
    if ( storagedState === null ) return initialTaskState;
    
    const parsedStoragedState = JSON.parse( storagedState ) as typeof initialTaskState;
    
    return {
      ...parsedStoragedState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00'
    };
  }
  
  const [ state, dispatch ] = useReducer( taskReducer, initialTaskState, storageState );
  const playBeepRef = useRef<ReturnType<typeof loadBeep>>( null );
  
  const value = useMemo( () => ( {
    state,
    dispatch,
  } ), [ state, dispatch ] );
  
  const worker = TimerWorkerManager.getInstance();
  
  worker.onmessage( e => {
    const countDownSeconds = e.data;
    
    if ( countDownSeconds <= 0 ) {
      if ( playBeepRef.current ) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      
      dispatch( {type: TaskActionTypes.COMPLETE_TASK} );
      worker.terminate();
    }
    else {
      dispatch( {
        type: TaskActionTypes.COUNT_DOWN,
        payload: {secondsRemaining: countDownSeconds}
      } );
    }
  } );
  
  
  useEffect( () => {
    localStorage.setItem('chronos-pomodoro:state', JSON.stringify( value.state ));
    
    if ( !value.state.activeTask ) {
      worker.terminate();
    }
    
    worker.postMessage( value.state );
  }, [ value.state, worker ] );
  
  useEffect( () => {
    if ( state.activeTask && playBeepRef.current === null ) {
      playBeepRef.current = loadBeep();
    }
  }, [ state.activeTask ] );
  
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider >
  );
}