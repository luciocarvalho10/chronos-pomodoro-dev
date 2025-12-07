import type { TaskModel }                from '../../models/TaskModel.tsx';
import type { TaskStateModel }           from '../../models/TaskStateModel.tsx';
import { getMinutesAndSecondsFormatted } from '../../utils/getMinutesAndSecondsFormatted.ts';
import { getNextCycle }                  from '../../utils/getNextCycle.ts';

export const startTask = (state: TaskStateModel, payload: TaskModel) => {
  const activeTask = payload;
  const currentCycle = getNextCycle( state.currentCycle );
  const secondsRemaining = payload.duration * 60;
  const formattedSecondsRemaining = getMinutesAndSecondsFormatted(
    secondsRemaining );
  const tasks = [ ...state.tasks, activeTask ];
  
  return {
    ...state,
    activeTask,
    config: {...state.config},
    currentCycle,
    formattedSecondsRemaining,
    secondsRemaining,
    tasks,
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

export const resetState = (state: TaskStateModel) => state;

export const completeTask = (state: TaskStateModel) => {
  const completeDate = (task: TaskModel) =>
    state.activeTask && state.activeTask.id === task.id ? {
      ...task,
      completeDate: Date.now()
    } : task;
  
  return {
    ...state,
    activeTask: null,
    formattedSecondsRemaining: '00:00',
    secondsRemaining: 0,
    tasks: state.tasks.map( completeDate )
  };
};

export const countDown = (state: TaskStateModel, payload: {
  secondsRemaining: number
}) => ( {
  ...state,
  secondsRemaining: payload.secondsRemaining,
  formattedSecondsRemaining: getMinutesAndSecondsFormatted(
    payload.secondsRemaining )
} );