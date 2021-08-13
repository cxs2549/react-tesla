import styled from 'styled-components'

const StyledSource = styled.div`
  padding: .75rem 1rem;
  height: 80px;
  background-color: #282828;
  margin-top: .75rem;
  color: white;
  display: flex;
  align-items: center;
  img {
    border-radius: 6px;
    height: 100%;
    margin-right: 1rem;
  }
  span {
    font-weight: 600;
  }
`

const Source = ({article}) => {
  return (
    <StyledSource>
      <img src={article.source.image} alt="" />
      <span>{article.source.network}</span>
    </StyledSource>
  )
}

export default Source
