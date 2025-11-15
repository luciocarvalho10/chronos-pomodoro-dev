import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { Providers } from './contexts/providers.tsx';

function App() {
  return (
      <Providers>
        <Home />
      </Providers>
  )
}

export default App;