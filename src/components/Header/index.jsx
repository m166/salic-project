import React, { memo } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { ReactComponent as SalicLogo } from 'assets/images/salic-logo.svg'
import { StyledHeaderWrapper } from './styled'

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SalicLogo className="salic-logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bem-vindo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledHeaderWrapper>
  )
}

export default memo(Header)
