import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon
}                              from 'lucide-react';
import * as React              from 'react';
import { useEffect, useState } from 'react';
import { ROUTES }              from '../../router/routes.tsx';
import { RouterLink }          from '../RouterLink';
import styles                  from './styles.module.css';

export type Themes = 'light' | 'dark';


export function Menu() {
  const [ theme, setTheme ] = useState<Themes>( () =>
    localStorage.getItem( 'theme' ) as Themes || 'dark' );
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };
  
  function toggleTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setTheme( prevTheme => prevTheme === 'light' ? 'dark' : 'light' );
  }
  
  useEffect( () => {
    document.documentElement.setAttribute( 'data-theme', theme );
    localStorage.setItem( 'theme', theme );
  }, [ theme ] );
  
  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href={ROUTES.HOME.path}
        arial-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </RouterLink >
      <RouterLink
        className={styles.menuLink}
        href={ROUTES.HISTORY.path}
        arial-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </RouterLink >
      <RouterLink
        className={styles.menuLink}
        href={ROUTES.SETTINGS.path}
        arial-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </RouterLink >
      <a
        className={styles.menuLink}
        href="#"
        arial-label="Mudar Tema"
        title="Mudar Tema"
        onClick={toggleTheme}
      >
        {nextThemeIcon[ theme ]}
      </a >
    </nav >
  );
}