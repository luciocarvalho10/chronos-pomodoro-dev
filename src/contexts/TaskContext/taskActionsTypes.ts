import type { TaskModel }      from '../../models/TaskModel.tsx';
import type { TaskStateModel } from '../../models/TaskStateModel.tsx';

export enum TaskActionTypes {
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
  COMPLETE_TASK = 'COMPLETE_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  START_TASK = 'START_TASK',
}

type ChangeSettings = {
  type: TaskActionTypes.CHANGE_SETTINGS;
  payload: TaskStateModel['config']
}
type CompleteTask = {
  type: TaskActionTypes.COMPLETE_TASK;
}
type CountDown = {
  type: TaskActionTypes.COUNT_DOWN;
  payload: { secondsRemaining: number }
}
type InterruptTask = {
  type: TaskActionTypes.INTERRUPT_TASK;
}
type ResetState = {
  type: TaskActionTypes.RESET_STATE;
}
type StartTask = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel
}

export type TaskActionWithPayload =
  | ChangeSettings
  | CountDown
  | StartTask;

export type TaskActionWithoutPayload =
  | InterruptTask
  | CompleteTask
  | ResetState;

export type TaskActionModel =
  | TaskActionWithPayload
  | TaskActionWithoutPayload;