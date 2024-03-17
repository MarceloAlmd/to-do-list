import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalTheme";
import { defaultTheme } from "./styles/defaultThemes";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}
