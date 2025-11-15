import styles from './styles.module.css';
import { useTask } from '../../contexts/TaskContext/useTask.ts';

export function CountDown() {
  const { state } = useTask()

  return (
      <div className={styles.countDown}>
        { state.formattedSecondsRemaining }
      </div>
  );
}