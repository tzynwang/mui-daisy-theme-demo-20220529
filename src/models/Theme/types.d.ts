import { THEME_KEYS } from '@Models/Theme';
import type { ThemeOptions } from '@mui/system';
import type { Theme as MuiTheme } from '@mui/material/styles';

export type ThemeKeys = typeof THEME_KEYS[number];

export type ThemePool = Array<{ key: ThemeKeys; theme: MuiTheme }>;

export interface ThemeModule {
  default: ThemeOptions;
}

export { MuiTheme };
