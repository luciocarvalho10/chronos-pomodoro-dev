import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/Defaultbutton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

function App() {
  return (
      <>
        <Container>
          <Logo/>
        </Container>

        <Container>
          <Menu />
        </Container>

        <Container>
          <CountDown />
        </Container>

        <Container>
          <form action="">
            <div className='formRow'>
              <DefaultInput placeholder={'Digite algo...'} labelText={'task'} id={'meuInput'} type='text' />
            </div>

            <div className='formRow'>
              <Cycles />
            </div>

            <div className='formRow'>
              <DefaultButton type={'submit'} icon={<PlayCircleIcon />} />
            </div>
          </form>
        </Container>

        <Container>
          <Footer />
        </Container>
      </>
  );
}

export default App;