import styled from "styled-components";
import { GiStripedSun } from "react-icons/gi";
import { RiPhoneCameraLine } from "react-icons/ri";
import { BiMicrophone } from "react-icons/bi";
import Topbar from "../../../../components/Header/Topbar/Topbar";

const StyledSearchbar = styled.div`
  color: white;
  padding: 0 1rem;
  @media (min-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    max-width: 68%;
  }
  @media (min-width: 1280px) {
    max-width: 55%;
  }
  #weather {
    padding-left: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    #temp {
      background-color: #cdcdcd50;
      font-weight: 500;
      width: min-content;
      white-space: nowrap;
      padding: 2px 12px;
      border-radius: 99999px;
      font-size: 1.2rem;
      box-shadow: var(--boxShadow);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        color: orange;
        font-size: 1.5rem;
      }
      span {
        text-shadow: var(--textShadow);
      }
    }
  }
  #searchbar {
    margin-top: ${props => (!props.noweather ? '0.5rem' : '0')};
    position: relative;
    box-shadow: var(--boxShadow);
    border-radius: 99999px;
    input {
      border: none;
      border-radius: 99999px;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 12px 1.25rem;
      color: white;
      width: 100%;
      font-size: 1.2rem;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: var(--svgSize);
      color: #8abae6;
      &:first-of-type {
        right: 4rem;
      }
      &:last-of-type {
        right: 1.25rem;
      }
    }
  }
`;

const Searchbar = ({ noweather }) => {
  return (
    <StyledSearchbar noweather={noweather}>
      {!noweather && (
        <div id="weather">
          <div id="temp">
            <GiStripedSun />
            <span>77&deg;F</span>
          </div>
        </div>
      )}
      <div id="searchbar">
        <input type="search" placeholder="Search or type URL" />
        <RiPhoneCameraLine />
        <BiMicrophone />
      </div>
      <Topbar  />
    </StyledSearchbar>
  );
};

export default Searchbar;
