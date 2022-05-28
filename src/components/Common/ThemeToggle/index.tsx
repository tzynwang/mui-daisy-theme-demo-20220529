import React, { memo, useContext } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { ModeContext } from '@Models/Mode';
import type { ThemeKeys } from './types';

function ThemeToggle(): React.ReactElement {
  /* States */
  const context = useContext(ModeContext);

  /* Functions */
  const handleThemeToggle = (): void => {
    const currentMode = context?.mode as ThemeKeys;
    context?.setMode(currentMode === 'cupcake' ? 'coffee' : 'cupcake');
  };

  /* Main */
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Button onClick={handleThemeToggle}>change theme</Button>
      </Grid>
      <Grid item>Current theme: {context ? context.mode : null}</Grid>
    </Grid>
  );
}

export default memo(ThemeToggle);
