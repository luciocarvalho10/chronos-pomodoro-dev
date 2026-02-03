import { useTask }          from '../../contexts/TaskContext/useTask.ts';
import { getNextCycle }     from '../../utils/getNextCycle.ts';
import { getNextCycleType } from '../../utils/getNextCycleType.ts';
import { getTaskType }      from '../../utils/getTaskType.ts';
import styles               from './styles.module.css';


export function Cycles() {
  const {state} = useTask();
  const cycleDots = Array.from( {length: state.currentCycle} );
  
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
              aria-label={`Indicador de ciclo de ${getTaskType( type )}`}
              title={`Indicador de ciclo de ${getTaskType( type )}`}
            ></span >
          );
        } )}
      </div >
    </div >
  );
}