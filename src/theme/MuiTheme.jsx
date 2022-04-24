import React from 'react'
import { theme } from './theme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiTheme
