import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Roboto } from '@next/font/google'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#232f3e',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#f2f3f3',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 16,
    fontWeightRegular: 400,
    h1: {
      fontSize: 26,
      fontWeight: 800,
      overflowWrap: 'anywhere',
    },
    h2: {
      fontSize: 26,
      fontWeight: 800,
      overflowWrap: 'anywhere',
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      overflowWrap: 'anywhere',
    },
    h4: {
      fontSize: 22,
      fontWeight: 400,
      overflowWrap: 'anywhere',
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
      overflowWrap: 'anywhere',
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
      overflowWrap: 'anywhere',
    },
    body1: {
      fontSize: 16,
      overflowWrap: 'anywhere',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiChip: {
      defaultProps: {
        style: {
          cursor: 'pointer',
        },
      },
    },
  },
})

export default theme
