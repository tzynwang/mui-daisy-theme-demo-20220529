export type { ThemeOptions as MuiThemeOptions } from '@mui/system';
export type { Theme as MuiTheme } from '@mui/material/styles';

export type ThemeKeys = 'cupcake' | 'coffee' | 'retro';

export type ThemePool = Array<{ key: ThemeKeys; theme: MuiTheme }>;

export interface ThemeModule {
  default: MuiThemeOptions;
}
