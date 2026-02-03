import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import type { ToastContentProps }       from 'react-toastify';
import { DefaultButton }                from '../Defaultbutton';
import styles                           from './style.module.css';

export function Dialog({closeToast, data}: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p >{data}</p >
        
        <div className={styles.buttonsContainer}>
          <DefaultButton
            aria-label="Confirmar ação e fechar"
            icon={<ThumbsUpIcon />}
            onClick={() => closeToast( true )}
            title="Confirmar ação e fechar"
          />
          <DefaultButton
            aria-label="Cancelar ação e fechar"
            color="red"
            icon={<ThumbsDownIcon />}
            onClick={() => closeToast( false )}
            title="Cancelar ação e fechar"
          />
        </div >
      </div >
    </>
  );
}