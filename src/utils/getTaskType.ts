import type { TaskModel } from '../models/TaskModel.tsx';

export const getTaskType = (type: TaskModel['type']) => {
  const types = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };
  return types[ type ];
};