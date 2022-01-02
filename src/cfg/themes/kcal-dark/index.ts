import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const kcalDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      main: '#d02525',
    },
  },
  components: overrides,
};
