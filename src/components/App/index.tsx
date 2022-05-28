import React, { useState, useEffect } from 'react';

import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import ModeContext from '@Components/Base/ModeContext';
import ThemeToggle from '@Components/Common/ThemeToggle';
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
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="Read">
          Typography variant="Read": Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Architecto nulla porro ea reprehenderit accusamus
          voluptatum tenetur aspernatur sit praesentium quasi placeat aliquid
          minus odio sequi est, non nisi. Consectetur, dolores?
        </Typography>
        <ThemeToggle />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
