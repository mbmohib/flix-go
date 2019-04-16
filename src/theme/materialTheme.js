import { createMuiTheme } from '@material-ui/core/styles';

// All the following keys are optional.
// We try our best to provide a great default value.
const materialTheme = createMuiTheme({
  palette: {
    primary: {
        main: '#ff55a5',
        contrastText: 'white'
    },
    secondary: {
        main: '#28282d'
    },
    error: {
        main: '#C0392B'
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',// Some CSS
      }
    },
    MuiTypography: {
        body1: {
          marginBottom: '20px'
        },
        h1: {
          fontSize: '1.8rem',
        },
        h2: {
          fontSize: '1.5rem',
        },
      }
  },
});

export default materialTheme;