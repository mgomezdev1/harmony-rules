import { Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import Title from "./text/Title";
import {
  BaseRules,
  Chords,
  OptionalRules,
  PowerCards,
  Winning,
} from "./sections";

function App() {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <Container sx={{ py: 8 }}>
        <Stack width="100%" gap={1} alignContent="center">
          <Title />
          <BaseRules />
          <PowerCards />
          <Chords />
          <Winning />
          <OptionalRules />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
