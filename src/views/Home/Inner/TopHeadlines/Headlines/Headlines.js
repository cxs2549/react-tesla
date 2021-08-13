import styled from "styled-components";
import Headline from "./Headline/Headline";
import {articles as master} from '../../../../../data/articles'

const StyledHeadlines = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: #3434348a;
  box-shadow: var(--boxShadow);
  > div:last-of-type {
    border-bottom: none;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Headlines = () => {
  const headlines = master.slice(2, 8)
  return (
    <StyledHeadlines>
      {headlines.map((headline, i) => (
        <Headline key={i} headline={headline} />
      ))}
    </StyledHeadlines>
  );
};

export default Headlines;
