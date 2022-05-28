import React, { useState, useEffect } from 'react';

import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ModeContext from '@Components/Base/ModeContext';
import ThemeToggle from '@Components/Common/ThemeToggle';
import TypographyDemo from '@Components/Common/TypographyDemo';
import theme from '@Theme/index';

function App(): React.ReactElement {
  /* States */
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
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
        <TypographyDemo />
        <ThemeToggle />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
