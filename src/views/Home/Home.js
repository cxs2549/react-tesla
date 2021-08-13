import styled from 'styled-components'
import hero from '../../assets/hero.jpg'
import Inner from "./Inner/Inner"
const StyledHome = styled.div`
  background-color: transparent;
  max-height: 100vh;
  &::after {
    content: '';
    background-image: url(${hero});
    background-position: center center;
    background-size: cover;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
    z-index: -1;
  }
`

const Home = () => {
  
  return (
    <StyledHome>
      <Inner />
    </StyledHome>
  )
}

export default Home
