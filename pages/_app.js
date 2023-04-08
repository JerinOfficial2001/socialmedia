import '@/styles/globals.css'
import { createTheme } from '@mui/material'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
const theme =createTheme({

  palette:{
    primary:{
      main:'#fcd'
    }}
})

  return (
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
