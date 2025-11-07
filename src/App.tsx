import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

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
              <button>Enviar</button>
            </div>
          </form>
        </Container>
      </>
  );
}

export default App;