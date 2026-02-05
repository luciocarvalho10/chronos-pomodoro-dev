import type { TaskModel }      from '../../models/TaskModel.tsx';
import type { TaskStateModel } from '../../models/TaskStateModel.tsx';

export const TaskActionTypes = {
  CHANGE_SETTINGS: 'CHANGE_SETTINGS',
  COMPLETE_TASK: 'COMPLETE_TASK',
  COUNT_DOWN: 'COUNT_DOWN',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  START_TASK: 'START_TASK',
} as const;

type ChangeSettings = {
  type: typeof TaskActionTypes.CHANGE_SETTINGS;
  payload: TaskStateModel['config']
}
type CompleteTask = {
  type: typeof TaskActionTypes.COMPLETE_TASK;
}
type CountDown = {
  type: typeof TaskActionTypes.COUNT_DOWN;
  payload: { secondsRemaining: number }
}
type InterruptTask = {
  type: typeof TaskActionTypes.INTERRUPT_TASK;
}
type ResetState = {
  type: typeof TaskActionTypes.RESET_STATE;
}
type StartTask = {
  type: typeof TaskActionTypes.START_TASK;
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