import { StyledContainer } from 'common/styles/styled'
import Header from 'components/Header'
import Home from 'containers/Home'
import Theme from 'components/Theme'

const App = () => (
  <Theme>
    <Header />
    <StyledContainer>
      <Home />
    </StyledContainer>
  </Theme>
)

export default App
