import { type ReactNode, useEffect, useMemo, useReducer } from 'react';
import { TimerWorkerManager }                             from '../../workers/TimerWorkerManager.ts';
import { initialTaskState }                               from './initialTaskState.ts';
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
    
    if ( countDownSeconds === 0 ) {
      console.log( 'Woker finalizado -- com activeTask' );
      worker.terminate();
    }
  } );
  
  
  useEffect( () => {
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