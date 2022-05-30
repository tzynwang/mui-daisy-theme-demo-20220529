import { ThemeOptions } from '@mui/material/styles';
import palette from './palette';
import Button from './components/Button';

const theme = {
  ...palette,
  components: {
    ...Button
  }
} as ThemeOptions;

export default theme;
