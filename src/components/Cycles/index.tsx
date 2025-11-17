import { useTask }          from '../../contexts/TaskContext/useTask.ts';
import { getNextCycle }     from '../../utils/getNextCycle.ts';
import { getNextCycleType } from '../../utils/getNextCycleType.ts';
import styles               from './styles.module.css';


export function Cycles() {
  const {state} = useTask();
  const cycleDots = Array.from( {length: state.currentCycle} );
  
  const cycleDescription = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };
  
  return (
    <div className={styles.cycles}>
      <span >Ciclos:</span >
      
      <div className={styles.cycleDots}>
        {cycleDots.map( (_, index) => {
          const cycle = getNextCycle( index );
          const type = getNextCycleType( cycle );
          
          return (
            <span
              key={cycle}
              className={`${styles.cycleDot} ${styles[ type ]}`}
              aria-label={`Indicador de ciclo de ${cycleDescription[ type ]}`}
              title={`Indicador de ciclo de ${cycleDescription[ type ]}`}
            ></span >
          );
        } )}
      </div >
    </div >
  );
}