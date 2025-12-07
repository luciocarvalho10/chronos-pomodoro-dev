import type { TaskStateModel } from '../../models/TaskStateModel.tsx';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 0.10,
    shortBreakTime: 0.10,
    longBreakTime: 0.10,
  },
};
