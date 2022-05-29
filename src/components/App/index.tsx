import React, { useState, useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ModeToggle from '@Components/Common/ModeToggle';
import ThemeToggle from '@Components/Common/ThemeToggle';
import TypographyDemo from '@Components/Common/TypographyDemo';

import { ModeContext } from '@Models/Mode';
import Theme, { ThemeContext } from '@Models/Theme';
import type { ModeKeys, ThemeKeys, MuiTheme } from './types';

function App(): React.ReactElement {
  /* States */
  const [mode, setMode] = useState<ModeKeys>('dark');
  const [themeName, setThemeName] = useState<ThemeKeys>('coffee');
  const [dynamicTheme, setDynamicTheme] = useState<MuiTheme>(
    Theme.getTheme(themeName)
  );

  /* Hooks */
  useEffect(() => {
    setDynamicTheme(Theme.getTheme(themeName));
  }, [themeName]);

  /* Main */
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeContext.Provider value={{ themeName, setThemeName }}>
        <ThemeProvider theme={dynamicTheme}>
          <CssBaseline />
          <TypographyDemo />
          <ThemeToggle />
          <ModeToggle />
        </ThemeProvider>
      </ThemeContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
