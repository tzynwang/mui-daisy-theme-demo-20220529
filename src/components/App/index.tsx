import React, { useState, useEffect } from 'react';

import { deepmerge } from '@mui/utils';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ModeContext from '@Components/Base/ModeContext';
import ThemeToggle from '@Components/Common/ThemeToggle';
import TypographyDemo from '@Components/Common/TypographyDemo';
import basicTheme from '@Theme/Basic';
import cupcakeTheme from '@Theme/Cupcake';
import coffeeTheme from '@Theme/Coffee';

const mergedCupcakeTheme = deepmerge(basicTheme, cupcakeTheme);
const mergedCoffeeTheme = deepmerge(basicTheme, coffeeTheme);

function App(): React.ReactElement {
  /* States */
  const [mode, setMode] = useState<'cupcake' | 'coffee'>('cupcake');
  const [dynamicTheme, setDynamicTheme] = useState<Theme>(
    createTheme({ ...mergedCupcakeTheme })
  );

  /* Hooks */
  useEffect(() => {
    const newTheme = mode === 'coffee' ? mergedCoffeeTheme : mergedCupcakeTheme;
    setDynamicTheme(createTheme({ ...newTheme }));
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
