import { type ReactNode, useEffect, useMemo, useReducer } from 'react';
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
  
  useEffect(() => {
    console.log(value.state)
  }, [value.state])
  
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider >
  );
}