import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import basicTheme from '@Theme/Basic';
import createModeContext from '@Tools/create-mode-context';
import firstLetterUpperCase from '@Tools/first-letter-upper-case';
import type { ThemeKeys, ThemePool, ThemeModule, MuiTheme } from './types';

const THEME_KEYS: ThemeKeys[] = ['cupcake', 'coffee'];

export const ModeContext = createModeContext<ThemeKeys>();

class Mode {
  public themePool: ThemePool = [];

  private init(): void {
    for (const key of THEME_KEYS) {
      const themeKey = key as ThemeKeys;
      const themeModule: ThemeModule = require(`@Theme/${firstLetterUpperCase(
        themeKey
      )}`);

      this.themePool.push({
        key: themeKey,
        theme: createTheme(deepmerge(basicTheme, themeModule.default))
      });
    }
  }

  constructor() {
    this.init();
  }

  public getTheme(key: ThemeKeys): MuiTheme {
    const find = this.themePool.find((t) => t.key === key);
    if (!find) return this.themePool[0]?.theme || createTheme(basicTheme);
    return find.theme;
  }
}

export default new Mode();
