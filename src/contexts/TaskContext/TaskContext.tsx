import { createContext, type Dispatch, type SetStateAction } from 'react';
import { initialTaskState } from './initialTaskState.ts';
import type { TaskStateModel } from '../../models/TaskStateModel.tsx';

export type TaskContextProps = {
  state: TaskStateModel;
  setState: Dispatch<SetStateAction<TaskStateModel>>;
}

const initialContextValue: TaskContextProps = { state: initialTaskState, setState: () => {} };

export const TaskContext = createContext<TaskContextProps | undefined>(initialContextValue);
