import type { TaskModel }                from '../../models/TaskModel.tsx';
import type { TaskStateModel }           from '../../models/TaskStateModel.tsx';
import { getMinutesAndSecondsFormatted } from '../../utils/getMinutesAndSecondsFormatted.ts';
import { getNextCycle }                  from '../../utils/getNextCycle.ts';

export const startTask = (state: TaskStateModel, payload: TaskModel) => {
  const newTask = payload;
  const newStateToCurrentCycle = getNextCycle( state.currentCycle );
  const secondsRemaining = payload.duration * 60;
  
  return {
    ...state,
    activeTask: newTask,
    config: {...state.config},
    currentCycle: newStateToCurrentCycle,
    formattedSecondsRemaining: getMinutesAndSecondsFormatted(
      secondsRemaining ),
    secondsRemaining,
    tasks: [ ...state.tasks, newTask ],
  };
};

export const interruptTask = (state: TaskStateModel) => {
  const interruptDate = (task: TaskModel) =>
    state.activeTask && state.activeTask.id === task.id ? {
      ...task,
      interruptDate: Date.now()
    } : task;
  
  return {
    ...state,
    activeTask: null,
    formattedSecondsRemaining: '00:00',
    secondsRemaining: 0,
    tasks: state.tasks.map( interruptDate )
  };
};
