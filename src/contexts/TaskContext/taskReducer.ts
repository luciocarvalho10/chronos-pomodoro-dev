import type { TaskStateModel }                   from '../../models/TaskStateModel.tsx';
import { interruptTask, startTask }              from './taskActions.ts';
import { type TaskActionModel, TaskActionTypes } from './taskActionsTypes.ts';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch ( action.type ) {
    case TaskActionTypes.START_TASK: {
      return startTask( state, action.payload );
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return interruptTask( state );
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }
  
  return state;
}