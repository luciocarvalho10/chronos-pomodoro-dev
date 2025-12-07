import { type ReactNode, useEffect, useMemo, useReducer } from 'react';
import { TimerWorkerManager }                             from '../../workers/TimerWorkerManager.ts';
import { initialTaskState }                               from './initialTaskState.ts';
import { TaskActionTypes }                                from "./taskActionsTypes.ts";
import { TaskContext }                                    from "./TaskContext.tsx";
import { taskReducer }                                    from './taskReducer.ts';

type TaskProviderProps = { children?: ReactNode };

export function TaskProvider({children}: TaskProviderProps) {
  const [ state, dispatch ] = useReducer( taskReducer, initialTaskState );
  
  const value = useMemo( () => ( {
    state,
    dispatch,
  } ), [ state, dispatch ] );
  
  const worker = TimerWorkerManager.getInstance();
  
  worker.onmessage( e => {
    const countDownSeconds = e.data;
    console.log( countDownSeconds );
    
    if ( countDownSeconds <= 0 ) {
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
    console.log( value.state );
    
    if ( !value.state.activeTask ) {
      console.log( 'Woker finalizado -- sem activeTask' );
      worker.terminate();
    }
    
    worker.postMessage( value.state );
  }, [ value.state, worker ] );
  
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider >
  );
}