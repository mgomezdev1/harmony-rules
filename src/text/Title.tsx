import { Stack, Typography } from "@mui/material";
import { Logo } from "../theme/Logo";

export default function Title() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <Logo />
      <Typography variant="h1" fontSize={72}>
        Harmony
      </Typography>
    </Stack>
  )
}
