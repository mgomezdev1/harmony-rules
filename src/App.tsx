import { Container, Stack } from '@mui/material'
import Title from './text/Title'
import { BaseRules, Chords, PowerCards, Winning } from './sections'

function App() {
  return (
    <Container sx={{py: 8}}>
      <Stack width="100%" gap={1} alignContent="center">
        <Title />
        <BaseRules />
        <PowerCards />
        <Chords />
        <Winning />
      </Stack>
    </Container>
  )
}

export default App
