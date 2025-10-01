declare module '@mui/material/styles' {
  interface Palette {
    background: {
      card: Palette['background']['default'];
    }
  }

  interface PaletteOptions {
    background: {
      card: PaletteOptions['background']['default'];
    }
  }
}
