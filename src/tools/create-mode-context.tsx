import { createContext, Context, Dispatch, SetStateAction } from 'react';

function createModeContext<T>(): Context<{
  themeName: T;
  setThemeName: Dispatch<SetStateAction<T>>;
} | null> {
  return createContext<null | {
    themeName: T;
    setThemeName: Dispatch<SetStateAction<T>>;
  }>(null);
}

export default createModeContext;
