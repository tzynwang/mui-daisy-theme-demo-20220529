import { createContext, Context, Dispatch, SetStateAction } from 'react';

function createThemeContext<T>(): Context<{
  themeName: T;
  setThemeName: Dispatch<SetStateAction<T>>;
} | null> {
  return createContext<null | {
    themeName: T;
    setThemeName: Dispatch<SetStateAction<T>>;
  }>(null);
}

export default createThemeContext;
