import './styles/theme.css';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MessagesContainer }            from './components/MessagesContainer';
import { Providers }                    from './contexts/providers.tsx';
import { AboutPomodoro }                from './pages/AboutPomodoro';
import { Home }                         from './pages/Home';
import { NotFound }                     from './pages/NotFound';

function App() {
  return (
    <Providers >
      <MessagesContainer >
        <BrowserRouter >
          <Routes >
            <Route
              path="/"
              element={<Home />}
            />
            
            <Route
              path="/about-pomodoro"
              element={<AboutPomodoro />}
            />
            
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes >
        </BrowserRouter >
      </MessagesContainer >
    </Providers >
  );
}

export default App;