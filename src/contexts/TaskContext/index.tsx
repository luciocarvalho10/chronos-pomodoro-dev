import { createContext, type Dispatch, type ReactNode, type SetStateAction, useContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel.tsx';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}

type TaskContextProps = {
  state: TaskStateModel;
  setState: Dispatch<SetStateAction<TaskStateModel>>;
}

type TaskProviderProps = { children?: ReactNode };

const initialContextValue = {
  state: initialState,
  setState: () => {},
}

/*
 const value = useMemo(
    () => ({
      user,
      signIn,
      isAuthenticated,
      isLoading,
    }),
    [user, signIn, isAuthenticated, isLoading],
  );
*/

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export function TaskProvider ({ children }: TaskProviderProps) {
  return (
      <TaskContext.Provider value={initialContextValue}>
        {children}
      </TaskContext.Provider>
  );
}

export function useTask() {
  const ctx = useContext( TaskContext );
  if ( !ctx ) throw new Error( 'useTask deve ser usado dentro de TaskProvider' );
  return ctx;
}
