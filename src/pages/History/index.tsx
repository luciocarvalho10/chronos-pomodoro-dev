import { TrashIcon }     from 'lucide-react';
import { Container }     from '../../components/Container';
import { DefaultButton } from '../../components/Defaultbutton';
import { Heading }       from '../../components/Heading';
import { MainTemplate }  from '../../templates/MainTemplate';
import styles            from './style.module.css';

export function History() {
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
            {Array.from( {length: 10} ).map( (_, index) => (
              <tr key={index}>
                <td >teste</td >
                <td >1min</td >
                <td >01/01/2026</td >
                <td >parada</td >
                <td >tipo</td >
              </tr >
            ) )}
            </tbody >
          </table >
        </div >
      </Container >
    </MainTemplate >
  );
}