import { useContext } from 'react';
import { TaskContext } from './TaskContext.tsx';


export function useTask() {
  const ctx = useContext( TaskContext );
  if ( !ctx ) throw new Error( 'useTask deve ser usado dentro de TaskProvider' );
  return ctx;
}
