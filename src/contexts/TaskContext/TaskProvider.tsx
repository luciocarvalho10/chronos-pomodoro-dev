import { type ReactNode, useMemo, useState } from 'react';
import type { TaskStateModel }               from '../../models/TaskStateModel.tsx';
import { initialTaskState }                  from './initialTaskState.ts';
import { TaskContext }                       from "./TaskContext.tsx";

type TaskProviderProps = { children?: ReactNode };

export function TaskProvider({children}: TaskProviderProps) {
  const [ state, setState ] = useState<TaskStateModel>( initialTaskState );
  
  const value = useMemo( () => ( {
    state,
    setState,
  } ), [ state, setState ] );
  
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}