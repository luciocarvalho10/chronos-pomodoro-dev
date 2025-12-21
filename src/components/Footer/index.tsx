import { RouterLink } from '../RouterLink';
import styles         from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink
        className={styles.footerLink}
        href="/about-pomodoro"
      >
        Entenda como funciona a técnica pomodoro
      </RouterLink >
      <RouterLink
        className={styles.footerLink}
        href="/"
      >
        Chronos Pomodoro Dev &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink >
    </footer >
  );
}