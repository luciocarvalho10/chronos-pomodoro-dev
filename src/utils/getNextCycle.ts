export const getNextCycle = (currentCycle: number) =>
  currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;