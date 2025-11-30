import { createContext, type Dispatch } from 'react';
import type { TaskStateModel }          from '../../models/TaskStateModel.tsx';
import { initialTaskState }             from './initialTaskState.ts';
import type { TaskActionModel }         from './taskActions.ts';

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: Dispatch<TaskActionModel>;
}

const initialContextValue: TaskContextProps = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps | undefined>(
  initialContextValue );
