import styled from "styled-components";
import logo from "../../assets/logo.png";
import Icons from "./Icons/Icons";
import Links from "./Links/Links";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 60px;
  border-bottom: 2px solid red;
  color: #717171;;
  img {
    max-width: 110px;
  }
  ul {
    list-style-type: none;
  }
  #left {
    display: flex;
    align-items: center;
    gap: 1rem;
    #logoContainer {
      display: flex;
      align-items: center;
      gap: .3rem;
      span {
        font-size: 1.45rem;
     margin-bottom: 2px;
        font-weight: 600;
        color: #717171;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div id="left">
        <div id="logoContainer">
          <img src={logo} alt="" />
          <span>Bing</span>
        </div>
        <Links />
      </div>
      <Icons />
    </StyledHeader>
  );
};

export default Header;
