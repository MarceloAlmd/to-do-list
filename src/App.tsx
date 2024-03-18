import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalTheme";
import { defaultTheme } from "./styles/defaultThemes";
import { Header } from "./components/header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
