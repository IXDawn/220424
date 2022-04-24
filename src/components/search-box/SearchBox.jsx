import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
export default function SearchBox() {
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          style: {
            width: `1048px`,
          },
        },
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <TextField />
    </ThemeProvider>
  )
}
