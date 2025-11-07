import styles from './styles.module.css'
import type { ComponentProps, ReactNode } from 'react';

type DefaultButtonProps = {
  icon: ReactNode;
  color?: 'green' | 'red';
} & ComponentProps<'button'>

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
      <>
        <button className={`${styles.button} ${styles[color]}`} {...props}>
          {icon}
        </button>
      </>
  )
}
