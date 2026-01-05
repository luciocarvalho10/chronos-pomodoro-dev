import type { TaskModel } from '../models/TaskModel.tsx';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if ( activeTask?.id === task.id ) return 'Em Progresso';
  if ( task.completeDate ) return 'Completa';
  if ( task.interruptDate ) return 'Interrompida';
  return 'Abandonada';
}