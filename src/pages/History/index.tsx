import { TrashIcon }     from 'lucide-react';
import { Container }     from '../../components/Container';
import { DefaultButton } from '../../components/Defaultbutton';
import { Heading }       from '../../components/Heading';
import { useTask }       from '../../contexts/TaskContext/useTask.ts';
import { MainTemplate }  from '../../templates/MainTemplate';
import { formatDate }    from '../../utils/formatDate.ts';
import { getTaskStatus } from '../../utils/getTaskStatus.ts';
import { getTaskType }   from '../../utils/getTaskType.ts';
import styles            from './style.module.css';

export function History() {
  const {state} = useTask();
  return (
    <MainTemplate >
      <Container >
        <Heading >
          <span >History</span >
          <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
              />
            </span >
        </Heading >
      </Container >
      
      <Container >
        <div className={styles.responsibleTable}>
          <table >
            <thead >
            <tr >
              <th >Tarefa</th >
              <th >Duração</th >
              <th >Data</th >
              <th >Status</th >
              <th >Tipo</th >
            </tr >
            </thead >
            
            <tbody >
            {state.tasks.map( (task) => (
              <tr key={task.id}>
                <td >{task.name}</td >
                <td >{task.duration}min</td >
                <td >{formatDate( task.startDate )}</td >
                <td >{getTaskStatus( task, state.activeTask )}</td >
                <td >{getTaskType( task.type )}</td >
              </tr >
            ) )}
            </tbody >
          </table >
        </div >
      </Container >
    </MainTemplate >
  );
}