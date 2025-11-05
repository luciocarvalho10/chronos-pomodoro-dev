import styles from './styles.module.css'
import type { ComponentProps } from 'react';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & ComponentProps<'input'>

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInputProps) {
  return (
      <>
        { labelText && <label htmlFor={id}>{labelText}</label>}
        <input className={styles.input} id={id} type={ type } {...rest}/>
      </>
  )
}
