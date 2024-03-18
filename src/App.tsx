import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalTheme";
import { defaultTheme } from "./styles/defaultThemes";
import { Header } from "./components/header";
import { InputForm } from "./components/inputForm";
import { Status } from "./components/status";
import { EmptyTask } from "./components/emptyTask";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <InputForm />
      <Status />

      <EmptyTask />
    </ThemeProvider>
  );
}
