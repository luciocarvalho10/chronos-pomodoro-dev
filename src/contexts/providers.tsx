import { type ReactNode } from 'react';
import { TaskProvider } from './TaskContext/TaskProvider.tsx';

export function Providers({ children }: { children: ReactNode }) {
  return (
      <TaskProvider>
        { children }
      </TaskProvider>
  );
}
