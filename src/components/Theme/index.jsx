import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import GlobalStyle from 'common/styles/global'
import CssBaseline from '@material-ui/core/CssBaseline'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
      background: '#FED388',
      contrastText: '#fff'
    },
    error: {
      main: '#eb0000',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
})

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme
