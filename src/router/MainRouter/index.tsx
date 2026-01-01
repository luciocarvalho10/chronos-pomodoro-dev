import { useEffect }                                 from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { ROUTES }                                    from '../routes.tsx';


function ScrollToTop() {
  const {pathname} = useLocation();
  
  useEffect( () => {
    // window.scrollTo( 0, 0 );
    window.scrollTo( {top: 0, behavior: 'smooth'} );
  }, [ pathname ] );
  
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter >
      <Routes >
        <Route
          path={ROUTES.HOME.path}
          element={ROUTES.HOME.element}
        />
        
        <Route
          path={ROUTES.HISTORY.path}
          element={ROUTES.HISTORY.element}
        />
        
        <Route
          path={ROUTES.ABOUT_POMODORO.path}
          element={ROUTES.ABOUT_POMODORO.element}
        />
        
        <Route
          path={ROUTES.NOT_FOUND.path}
          element={ROUTES.NOT_FOUND.element}
        />
      </Routes >
      <ScrollToTop />
    </BrowserRouter >
  );
}