
import { useTask }                       from '../../contexts/TaskContext/useTask.ts';
import { type TaskModel }                from '../../models/TaskModel.tsx';
import { type TaskStateModel }           from '../../models/TaskStateModel.tsx';
import { getMinutesAndSecondsFormatted } from '../../utils/getMinutesAndSecondsFormatted.ts';
import { getNextCycle }                  from '../../utils/getNextCycle.ts';
import { getNextCycleType }              from '../../utils/getNextCycleType.ts';
import styles                            from './styles.module.css';
import { DefaultInput }                  from '../DefaultInput';
import { Cycles }                        from '../Cycles';
import { DefaultButton }                  from '../Defaultbutton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { type FormEvent, useRef }         from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>( null );
  const {state, setState} = useTask();
  
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
    
    const secondsRemaining = newTask.duration * 60;
    
    setState( (prevState: TaskStateModel) => {
      const newTaskState = {
        activeTask: newTask,
        config: {...prevState.config},
        currentCycle: newStateToCurrentCycle,
        formattedSecondsRemaining: getMinutesAndSecondsFormatted(
          secondsRemaining ),
        secondsRemaining,
        tasks: [ ...prevState.tasks, newTask ],
      };
      
      return {...prevState, ...newTaskState};
    } );
  }
  
  function handleInterruptTask() {
    setState(prevState => {
      const interruptDate = (task: TaskModel) =>
        prevState.activeTask && prevState.activeTask.id === task.id ? { ...task, interruptDate: Date.now() } : task;
      
      return {
        ...prevState,
        activeTask: null,
        formattedSecondsRemaining: '00:00',
        secondsRemaining: 0,
        tasks: prevState.tasks.map(interruptDate)
      }
    })
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
        <p >Próximo intervalo é em {state.activeTask?.duration}min</p >
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