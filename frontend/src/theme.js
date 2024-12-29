import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#ff5722',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1b1b1b',
        },
      },
    },
  },
});

export default theme;
