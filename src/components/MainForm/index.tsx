import { useTask }                from '../../contexts/TaskContext/useTask.ts';
import { type TaskModel }         from '../../models/TaskModel.tsx';
import { type TaskStateModel }    from '../../models/TaskStateModel.tsx';
import { getNextCycle }           from '../../utils/getNextCycle.ts';
import styles                     from './styles.module.css';
import { DefaultInput }           from '../DefaultInput';
import { Cycles }                 from '../Cycles';
import { DefaultButton }          from '../Defaultbutton';
import { PlayCircleIcon }         from 'lucide-react';
import { type FormEvent, useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>( null );
  const {state, setState} = useTask();
  
  // ciclos
  const nextCycle = getNextCycle( state.currentCycle );
  
  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if ( !taskNameInput.current ) return;
    
    const taskName = taskNameInput.current.value.trim();
    
    if ( !taskName ) {
      alert( 'Por favor, digite um nome para a tarefa.' );
      return;
    }
    
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: 1,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: 'workTime'
    };
    
    const secondsRemaining = newTask.duration * 60;
    
    setState( (prevState: TaskStateModel) => {
      return {
        ...prevState,
        tasks: [ ...prevState.tasks, newTask ],
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        activeTask: newTask,
        currentCycle: nextCycle,
        config: {...prevState.config}
      };
    } );
  }
  
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput
          type="text"
          placeholder={'Digite algo...'}
          labelText={'task'}
          id={'meuInput'}
          ref={taskNameInput}
        />
      </div>
      
      <div className={styles.formRow}>
        <Cycles/>
      </div>
      
      <div className={styles.formRow}>
        <DefaultButton
          type={'submit'}
          title={'Botão Iniciar Tarefa'}
          icon={<PlayCircleIcon/>}
        />
      </div>
    </form>
  );
}