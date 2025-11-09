import styles from './styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../Defaultbutton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
      <form className={styles.form} action="">
        <div className={styles.formRow}>
          <DefaultInput placeholder={'Digite algo...'} labelText={'task'} id={'meuInput'} type='text' />
        </div>

        <div className={styles.formRow}>
          <Cycles />
        </div>

        <div className={styles.formRow}>
          <DefaultButton type={'submit'} icon={<PlayCircleIcon />} />
        </div>
      </form>
  );
}