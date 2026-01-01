import { AboutPomodoro } from '../pages/AboutPomodoro';
import { History }       from '../pages/History';
import { Home }          from '../pages/Home';
import { NotFound }      from '../pages/NotFound';

export const ROUTES = {
  HOME: {path: '/', element: <Home />},
  HISTORY: {path: '/history', element: <History />},
  SETTINGS: {path: '/configurations', element: <div >Config</div >},
  ABOUT_POMODORO: {path: '/about-pomodoro', element: <AboutPomodoro />},
  NOT_FOUND: {path: '*', element: <NotFound />},
};