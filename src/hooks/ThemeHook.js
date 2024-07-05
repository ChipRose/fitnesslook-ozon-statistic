import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../theme/theme";

function ThemeHook({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeHook;