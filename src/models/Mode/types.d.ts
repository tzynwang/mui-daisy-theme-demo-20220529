import { THEME_KEYS } from './index';
export type { ThemeOptions as MuiThemeOptions } from '@mui/system';
export type { Theme as MuiTheme } from '@mui/material/styles';

export type ThemeKeys = typeof THEME_KEYS[number];

export type ThemePool = Array<{ key: ThemeKeys; theme: MuiTheme }>;

export interface ThemeModule {
  default: MuiThemeOptions;
}
