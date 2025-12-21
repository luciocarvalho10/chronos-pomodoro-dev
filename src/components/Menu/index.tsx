import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon
}                              from 'lucide-react';
import { Link }                from 'react-router';
import styles                  from './styles.module.css';
import { useEffect, useState } from 'react';
import * as React              from 'react';

type Themes = 'light' | 'dark';

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
      <Link
        className={styles.menuLink}
        to="/"
        arial-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </Link >
      <Link
        className={styles.menuLink}
        to="#"
        arial-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </Link >
      <Link
        className={styles.menuLink}
        to="#"
        arial-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </Link >
      <Link
        className={styles.menuLink}
        to="#"
        arial-label="Mudar Tema"
        title="Mudar Tema"
        onClick={toggleTheme}
      >
        {nextThemeIcon[ theme ]}
      </Link >
    </nav >
  );
}