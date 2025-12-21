import { Link } from 'react-router';
import styles   from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.footerLink}
        to="/about-pomodoro"
      >
        Entenda como funciona a técnica pomodoro
      </Link >
      <Link
        className={styles.footerLink}
        to="/"
      >
        Chronos Pomodoro Dev &copy; {new Date().getFullYear()} - Feito com 💚
      </Link >
    </footer >
  );
}