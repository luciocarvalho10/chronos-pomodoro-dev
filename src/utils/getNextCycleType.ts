import type { TaskModel } from '../models/TaskModel.tsx';

export const getNextCycleType = (currentCycle: number): TaskModel['type'] =>
  currentCycle % 8 === 0 ? 'longBreakTime' : currentCycle % 2 === 0 ? 'shortBreakTime' : 'workTime';