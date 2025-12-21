import './styles/theme.css';
import './styles/global.css';
import { MessagesContainer } from './components/MessagesContainer';
import { Providers }         from './contexts/providers.tsx';
import { Home }              from './pages/Home';

function App() {
  return (
    <Providers >
      <MessagesContainer >
        <Home />
      </MessagesContainer >
    </Providers >
  );
}

export default App;