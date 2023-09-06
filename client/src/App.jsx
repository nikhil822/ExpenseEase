import styled from 'styled-components'
import bg from './images/bg.png'
import { MainLayout } from './styles/Layouts'
import Orb from './components/Button/Orb/Orb'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <AppStyled className='App'>
      <Orb />
      <MainLayout>
        <Navigation />
        Hello
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
  
  
`

export default App
