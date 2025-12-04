import { useTask }          from '../../contexts/TaskContext/useTask.ts';
import { getNextCycle }     from '../../utils/getNextCycle.ts';
import { getNextCycleType } from '../../utils/getNextCycleType.ts';

export function Tips() {
  const {state} = useTask();
  
  // cycles
  const newStateToCurrentCycle = getNextCycle( state.currentCycle );
  const typeToNewTask = getNextCycleType( newStateToCurrentCycle );
  
  const tipsForNoActiveTask = {
    workTime: <span >Próximo ciclo é de {state.config.workTime}min</span >,
    shortBreakTime:
      <span >Próximo ciclo é de {state.config.shortBreakTime}min</span >,
    longBreakTime: <span >Próximo descanso será longo</span >,
  };
  
  const tipsForWhenActiveTask = {
    workTime: <span >Foque por {state.config.workTime}min</span >,
    shortBreakTime:
      <span >Descanso por {state.config.shortBreakTime}min</span >,
    longBreakTime: <span >Descanso longo</span >,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[ state.activeTask.type ]}
      {!state.activeTask && tipsForNoActiveTask[ typeToNewTask ]}
    </>
  );
}