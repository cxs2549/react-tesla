import styled from 'styled-components'
import Items from "./Items/Items"

const StyledTrending = styled.div`

  background-color: gray;
  color: white;
  padding: 1rem 0;
  padding-bottom: 0;

  background-color: #0cbaba;
background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

  #mainTitle {
    font-size: 120%;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`

const Trending = () => {
  return (
    <StyledTrending>
      <h1 id="mainTitle">Trending stories</h1>
      <Items />
    </StyledTrending>
  )
}

export default Trending
