import styled from "styled-components";
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiMedal } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';

const StyledIcons = styled.nav`
  svg {
    font-size: 1.3rem;
  }
  ul {
    display: flex;
    gap: 1.25rem;
  }
`;

const Icons = () => {
  return (
    <StyledIcons>
      <ul>
        <li><FaRegUser /></li>
        <li><BiMedal /></li>
        <li><HiMenuAlt1 /></li>
      </ul>
    </StyledIcons>
  );
};

export default Icons;
