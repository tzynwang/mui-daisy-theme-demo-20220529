import { createContext, Dispatch, SetStateAction } from 'react';

const ModeContext = createContext<null | {
  mode: 'light' | 'dark';
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}>(null);

export default ModeContext;
