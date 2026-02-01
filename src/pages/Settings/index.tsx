import { SaveIcon }               from 'lucide-react';
import { type FormEvent, useRef } from 'react';
import { ToastAdapter }           from '../../adapters/ToastAdapter.ts';
import { Container }              from '../../components/Container';
import { DefaultButton }          from '../../components/Defaultbutton';
import { DefaultInput }           from '../../components/DefaultInput';
import { Heading }                from '../../components/Heading';
import { TaskActionTypes }        from '../../contexts/TaskContext/taskActionsTypes.ts';
import { useTask }                from '../../contexts/TaskContext/useTask.ts';
import { MainTemplate }           from '../../templates/MainTemplate';
import styles                     from './styles.module.css';

export function Settings() {
  const {state, dispatch} = useTask();
  const workTimeInput = useRef<HTMLInputElement>( null );
  const shortBreakTimeInput = useRef<HTMLInputElement>( null );
  const longBreakTimeInput = useRef<HTMLInputElement>( null );
  
  function handleSaveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ToastAdapter.dismiss();
    
    const formErrors: string[] = [];
    
    const workTime = Number( workTimeInput.current?.value );
    const shortBreakTime = Number( shortBreakTimeInput.current?.value );
    const longBreakTime = Number( longBreakTimeInput.current?.value );
    
    if ( isNaN( workTime ) || isNaN( shortBreakTime ) || isNaN( longBreakTime ) ) {
      formErrors.push( 'Digite apenas números em TODOS os campos!' );
    }
    
    if ( workTime < 1 || workTime > 99 ) {
      formErrors.push( 'Digite valores entre 1 e 99 para foco!' );
    }
    
    if ( shortBreakTime < 1 || shortBreakTime > 30 ) {
      formErrors.push( 'Digite valores entre 1 e 30 para descanso curto!' );
    }
    
    if ( longBreakTime < 1 || longBreakTime > 60 ) {
      formErrors.push( 'Digite valores entre 1 e 60 descanso longo!' );
    }
    
    if ( formErrors.length > 0 ) {
      formErrors.forEach( (error) => ToastAdapter.error( error ) );
    }
    
    dispatch( {
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime
      }
    } );
    
    ToastAdapter.success( 'Configurações salvas!' );
  }
  
  return (
    <MainTemplate >
      <Container >
        <Heading >Configurações</Heading >
      </Container >
      
      <Container >
        <p style={{textAlign: 'center'}}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p >
      </Container >
      
      <Container >
        <form
          action=""
          className={styles.form}
          onSubmit={handleSaveSettings}
        >
          <div className={styles.formRow}>
            <DefaultInput
              defaultValue={state.config.workTime}
              id="workTime"
              labelText="Foco"
              ref={workTimeInput}
              type="number"
            />
          </div >
          
          <div className={styles.formRow}>
            <DefaultInput
              defaultValue={state.config.shortBreakTime}
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInput}
              type="number"
            />
          </div >
          
          <div className={styles.formRow}>
            <DefaultInput
              defaultValue={state.config.longBreakTime}
              id="LongBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInput}
              type="number"
            />
          </div >
          
          <div className={styles.formRow}>
            <DefaultButton
              aria-label="Salvar Configurções"
              icon={<SaveIcon />}
              title="Salvar Configurações"
              type="submit"
            />
          </div >
        </form >
      </Container >
    </MainTemplate >
  );
}