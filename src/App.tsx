import { Container, Stack } from "@mui/material";
import Title from "./text/Title";
import {
  BaseRules,
  Chords,
  OptionalRules,
  PowerCards,
  Winning,
} from "./sections";
import { BaseThemeProvider } from "./providers";

function App() {
  return (
    <BaseThemeProvider>
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
    </BaseThemeProvider>
  );
}

export default App;
