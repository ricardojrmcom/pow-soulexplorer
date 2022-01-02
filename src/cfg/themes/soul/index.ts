import { ThemeOptions } from '@ricardo-jrm/fury/dist/mui';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const soul: ThemeOptions = {
  typography,
  palette: {
    primary: {
      main: '#037abd',
    },
  },
  components: overrides,
};
