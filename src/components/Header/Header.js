
import styled from 'styled-components'
import Bottombar from "./Bottombar/Bottombar"

const StyledHeader = styled.header`
  height: 60px;
  color: white;
  position: fixed;
  z-index: 100;
  
  svg {
    font-size: var(--svgSize);
  }
`

const Header = () => {

  

  return (
    <StyledHeader >
      <Bottombar />
    </StyledHeader>
  )
}

export default Header
