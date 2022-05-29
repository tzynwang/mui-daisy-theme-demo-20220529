import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import basicTheme from '@Theme/Basic';
import createThemeContext from '@Tools/create-theme-context';
import firstLetterUpperCase from '@Tools/first-letter-upper-case';
import type { ThemeKeys, ThemePool, ThemeModule, MuiTheme } from './types';

export const THEME_KEYS = ['coffee', 'cupcake', 'retro'] as const;

export const ThemeContext = createThemeContext<ThemeKeys>();

class Theme {
  public themePool: ThemePool = [];

  private init(): void {
    this.themePool = THEME_KEYS.map((key) => {
      const themeModule: ThemeModule = require(`@Theme/${firstLetterUpperCase(
        key
      )}`);
      return {
        key,
        theme: createTheme(deepmerge(basicTheme, themeModule.default))
      };
    });
  }

  constructor() {
    this.init();
  }

  public getTheme(key: ThemeKeys): MuiTheme {
    const find = this.themePool.find((t) => t.key === key);
    if (!find) return createTheme(); // fallback to default @mui theme
    return find.theme;
  }
}

export default new Theme();
