import './styles/theme.css';
import './styles/global.css';
import { MessagesContainer } from './components/MessagesContainer';
import { Providers }         from './contexts/providers.tsx';
import { MainRouter }        from './router/MainRouter';

function App() {
  return (
    <Providers >
      <MessagesContainer >
        <MainRouter />
      </MessagesContainer >
    </Providers >
  );
}

export default App;