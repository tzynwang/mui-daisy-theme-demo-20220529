import React, { memo, useContext } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import ModeContext from '@Components/Base/ModeContext';

function ThemeToggle(): React.ReactElement {
  /* States */
  const context = useContext(ModeContext);

  /* Functions */
  const handleThemeToggle = (): void => {
    context?.setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  /* Main */
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>Current theme: {context ? context.mode : null}</Grid>
      <Grid item>
        <Button onClick={handleThemeToggle}>change theme</Button>
      </Grid>
    </Grid>
  );
}

export default memo(ThemeToggle);
