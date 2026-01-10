import { TimerIcon }  from 'lucide-react';
import { ROUTES }     from '../../router/routes.tsx';
import { RouterLink } from '../RouterLink';
import styles         from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink
        className={styles.logoLink}
        href={ROUTES.HOME.path}
      >
        <TimerIcon />
        <span >Chronos</span >
      </RouterLink >
    </div >
  );
}