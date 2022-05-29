import { ThemeOptions } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';

const theme = {
  ...palette,
  ...typography,
  components: {
    ...Button
  }
} as ThemeOptions;

export default theme;
