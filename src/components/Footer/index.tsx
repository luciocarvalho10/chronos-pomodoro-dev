import styles from './styles.module.css';

export function Footer() {
  return (
      <footer className={styles.footer}>
        <a className={styles.footerLink} href='#'>
          Entenda como funciona a técnica pomodoro
        </a>
        <a className={styles.footerLink} href='#'>
          Chronos Pomodoro Dev &copy; { new Date().getFullYear()} - Feito com 💚
        </a>
      </footer>
  );
}