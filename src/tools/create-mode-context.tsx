import { createContext, Context, Dispatch, SetStateAction } from 'react';

function createModeContext<T>(): Context<{
  mode: T;
  setMode: Dispatch<SetStateAction<T>>;
} | null> {
  return createContext<null | {
    mode: T;
    setMode: Dispatch<SetStateAction<T>>;
  }>(null);
}

export default createModeContext;
