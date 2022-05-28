import { createContext, Dispatch, SetStateAction } from 'react';

const ModeContext = createContext<null | {
  mode: any;
  setMode: Dispatch<SetStateAction<any>>;
}>(null);

export default ModeContext;
