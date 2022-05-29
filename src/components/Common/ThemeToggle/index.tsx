import React, { memo, useContext } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

import { ThemeContext, THEME_KEYS } from '@Models/Theme';
import type { ThemeKeys } from './types';

function ThemeToggle(): React.ReactElement {
  /* States */
  const context = useContext(ThemeContext);

  /* Functions */
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const key = e.target.value as ThemeKeys;
    context?.setThemeName(key);
  };

  /* Main */
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={2}
    >
      <Grid item xs={6} sm={3}>
        <InputLabel htmlFor="selectThemeKey">select a theme</InputLabel>
        <Box>
          <NativeSelect
            id="selectThemeKey"
            onChange={handleThemeChange}
            fullWidth
          >
            {THEME_KEYS.map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </NativeSelect>
        </Box>
      </Grid>
      <Grid item xs={6} sm={9}>
        Current theme: {context ? context.themeName : null}
      </Grid>
    </Grid>
  );
}

export default memo(ThemeToggle);
