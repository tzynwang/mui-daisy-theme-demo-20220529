import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import theme from '@Theme/index';
import ThemeToggle from '@Components/ThemeToggle';

export const ModeContext = createContext<null | {
  mode: 'light' | 'dark';
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}>(null);

function App(): React.ReactElement {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [dynamicTheme, setDynamicTheme] = useState<Theme>(createTheme(theme));

  useEffect(() => {
    setDynamicTheme(createTheme({ ...theme, palette: { mode } }));
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        <div>hello world</div>
        <Typography variant="h1">h1</Typography>
        <Typography variant="Read">Read</Typography>
        <ThemeToggle />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
