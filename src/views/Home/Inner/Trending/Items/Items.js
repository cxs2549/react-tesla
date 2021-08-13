import styled from "styled-components";
import Item from "./Item/Item";
import {articles as master} from '../../../../../data/articles'
import Article from "../../Articles/Article/Article";


const StyledItems = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 0.75rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const Items = () => {
  const items = master.slice(3, 8)
  return (
    <StyledItems>
      {items.map((item, i) => (
        // 
        <Article article={item} key={i} transparent minWidth="284px" />
      ))}
    </StyledItems>
  );
};

export default Items;
