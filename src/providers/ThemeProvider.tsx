/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      card: "#cccccc",
    } as any,
  },
});

export function BaseThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
