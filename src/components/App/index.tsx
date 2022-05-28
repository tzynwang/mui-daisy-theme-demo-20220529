import React, { useState, useEffect } from 'react';

import { ThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ThemeToggle from '@Components/Common/ThemeToggle';
import TypographyDemo from '@Components/Common/TypographyDemo';

import Mode, { ModeContext } from '@Models/Mode';
import type { ThemeKeys } from './types';

function App(): React.ReactElement {
  /* States */
  const [themeName, setThemeName] = useState<ThemeKeys>('cupcake');
  const [dynamicTheme, setDynamicTheme] = useState<Theme>(Mode.getTheme(themeName));

  /* Hooks */
  useEffect(() => {
    setDynamicTheme(Mode.getTheme(themeName));
  }, [themeName]);

  /* Main */
  return (
    <ModeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        <TypographyDemo />
        <ThemeToggle />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
