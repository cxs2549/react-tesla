import styled from 'styled-components'
import Headlines from "./Headlines/Headlines"

const StyledTop = styled.div`

  background-color: #292929;
  color: white;
  background-color: #0cbaba;
background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

  padding: 1rem;
  h1 {
    font-size: 120%;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`

const TopHeadlines = () => {
  
  return (
    <StyledTop>
      <h1>Top headlines</h1>
      <Headlines />
    </StyledTop>
  )
}

export default TopHeadlines
