import type { TaskModel } from '../../models/TaskModel.tsx';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

type StartTask = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel
}
type CountDown = {
  type: TaskActionTypes.COUNT_DOWN;
  payload: { secondsRemaining: number }
}
type ResetState = {
  type: TaskActionTypes.RESET_STATE;
}
type InterruptTask = {
  type: TaskActionTypes.INTERRUPT_TASK;
}
type CompleteTask = {
  type: TaskActionTypes.COMPLETE_TASK;
}

export type TaskActionWithPayload =
  | StartTask
  | CountDown;

export type TaskActionWithoutPayload =
  | ResetState
  | InterruptTask
  | CompleteTask;

export type TaskActionModel =
  | TaskActionWithPayload
  | TaskActionWithoutPayload;