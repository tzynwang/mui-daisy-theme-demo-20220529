import React, { useState, useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ThemeToggle from '@Components/Common/ThemeToggle';
import AlertDemo from '@Components/Common/AlertDemo';
import ButtonDemo from '@Components/Common/ButtonDemo';
import TypographyDemo from '@Components/Common/TypographyDemo';
import Theme, { ThemeContext } from '@Models/Theme';
import type { ThemeKeys, MuiTheme } from './types';

function App(): React.ReactElement {
  /* States */
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
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        <ThemeToggle />
        <AlertDemo />
        <ButtonDemo />
        <TypographyDemo />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
