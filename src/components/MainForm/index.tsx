import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { type FormEvent, useRef }         from 'react';
import { TaskActionTypes }                from '../../contexts/TaskContext/taskActionsTypes.ts';
import { useTask }                        from '../../contexts/TaskContext/useTask.ts';
import { type TaskModel }                 from '../../models/TaskModel.tsx';
import { getNextCycle }                   from '../../utils/getNextCycle.ts';
import { getNextCycleType }               from '../../utils/getNextCycleType.ts';
import { Cycles }                         from '../Cycles';
import { DefaultButton }                  from '../Defaultbutton';
import { DefaultInput }                   from '../DefaultInput';
import { Tips }                           from '../Tips';
import styles                             from './styles.module.css';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>( null );
  const {state, dispatch} = useTask();
  
  // cycles
  const newStateToCurrentCycle = getNextCycle( state.currentCycle );
  const typeToNewTask = getNextCycleType( newStateToCurrentCycle );
  
  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if ( !taskNameInput.current ) return;
    
    const taskName = taskNameInput.current.value.trim();
    
    if ( !taskName ) {
      alert( 'Por favor, digite um nome para a tarefa.' );
      return;
    }
    
    const newTask: TaskModel = {
      completeDate: null,
      duration: state.config[ typeToNewTask ],
      id: Date.now().toString(),
      interruptDate: null,
      name: taskName,
      startDate: Date.now(),
      type: typeToNewTask
    };
    
    dispatch( {type: TaskActionTypes.START_TASK, payload: newTask} );
  }
  
  function handleInterruptTask() {
    dispatch( {type: TaskActionTypes.INTERRUPT_TASK} );
  }
  
  return (
    <form
      onSubmit={handleCreateNewTask}
      className={styles.form}
      action=""
    >
      <div className={styles.formRow}>
        <DefaultInput
          type="text"
          placeholder={'Digite algo...'}
          labelText={'task'}
          id={'meuInput'}
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div >
      
      <div className={styles.formRow}>
        <Tips />
      </div >
      
      <div className={styles.formRow}>
        {state.currentCycle > 0 && <Cycles />}
      </div >
      
      <div className={styles.formRow}>
        {!state.activeTask && (
          <DefaultButton
            aria-label={'Iniciar nova Tarefa'}
            icon={<PlayCircleIcon />}
            key={'Botão Iniciar nova Tarefa'}
            title={'Botão Iniciar nova Tarefa'}
            type={'submit'}
          />
        )}
        
        {!!state.activeTask && (
          <DefaultButton
            aria-label={'Interromper atual Tarefa'}
            color={'red'}
            icon={<StopCircleIcon />}
            key={'Interromper atual Tarefa'}
            onClick={handleInterruptTask}
            title={'Interromper atual Tarefa'}
            type={'button'}
          />
        )}
      </div >
    </form >
  );
}