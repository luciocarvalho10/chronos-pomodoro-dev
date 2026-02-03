import { useEffect }    from 'react';
import { PROJECT_NAME } from '../../constants/constants.ts';
import { MainTemplate } from '../../templates/MainTemplate';
import { Container }    from '../../components/Container';
import { CountDown }    from '../../components/CountDown';
import { MainForm }     from '../../components/MainForm';

export function Home() {
  useEffect( () => {
    document.title = `${PROJECT_NAME}`;
  }, [] );
  return (
    <MainTemplate >
      <Container >
        <CountDown />
      </Container >
      
      <Container >
        <MainForm />
      </Container >
    </MainTemplate >
  );
}