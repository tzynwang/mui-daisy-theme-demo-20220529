import React, { useState, useEffect } from 'react';

import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import ModeContext from '@Components/Base/ModeContext';
import ThemeToggle from '@Components/Common/ThemeToggle';
import theme from '@Theme/index';

function App(): React.ReactElement {
  /* States */
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [dynamicTheme, setDynamicTheme] = useState<Theme>(createTheme(theme));

  /* Hooks */
  useEffect(() => {
    setDynamicTheme(createTheme({ ...theme, palette: { mode } }));
  }, [mode]);

  /* Main */
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
