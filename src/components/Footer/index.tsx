import { ROUTES }     from '../../router/routes.tsx';
import { RouterLink } from '../RouterLink';
import styles         from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink
        className={styles.footerLink}
        href={ROUTES.ABOUT_POMODORO.path}
      >
        Entenda como funciona a técnica pomodoro
      </RouterLink >
      <RouterLink
        className={styles.footerLink}
        href={ROUTES.HOME.path}
      >
        Chronos Pomodoro Dev &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink >
    </footer >
  );
}