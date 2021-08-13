import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";

const StyledHeadline = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-bottom: 1px solid rgb(99, 99, 99);
  max-height: min-content;
  gap: 1rem;
  @media (min-width: 768px) {
    border-bottom: none;
  }
  #text {
    width: 100%;
    color: white;
    border-radius: 8px;
    position: relative;
    padding: 0;
    display: flex;
    flex-flow: column;
    min-height: 140px;
    padding: 1rem;
    padding-right: 0;
    justify-content: space-between;
    #source {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: flex-start img {
        max-width: 20px;
        max-height: 20px;
        margin-right: 0.5rem;
        border-radius: 3px;
      }
      img {
        max-width: 16px;
        max-height: 16px;
        margin-right: 0.45rem;
        border-radius: 3px;
      }
      span {
        font-size: 80%;
        margin-right: 0.25rem;
        &:first-of-type::after {
          content: "•";
          padding-left: 0.25rem;
          opacity: 0.7;
        }
      }
    }
    h1 {
      font-size: 105%;
      min-height: 4rem;
      max-height: 4rem;
      overflow: hidden;
      /* height: 56px; */
    }
    #icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      #trio {
        display: flex;
        align-items: center;
        > div {
          margin-right: 0.5rem;
          padding: 0 2px;
        }
        svg {
          font-size: 1.2rem;
        }
        span {
          margin-left: 0.25rem;
          font-size: 80%;
        }
        #like {
          padding: 0 4px;
          margin-right: 0.5rem;
          display: flex;
          align-items: center;

          border-radius: 99999px;
        }
      }
    }
  }
  #imageDots {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    img {
      max-width: 100%;

      max-height: 72%;
      object-fit: cover;
      border-radius: 8px;
      flex-grow: 1;
      margin-bottom: 0.25rem;
    }
    #ellipsis {
      padding: 6px 6px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: none;
    }
  }
`;

const Headline = ({ headline }) => {
  return (
    <StyledHeadline>
      <div id="text">
        <div id="innerText">
          <div id="source">
            {headline.sourceImage && <img src={headline.sourceImage} alt="" />}
            <span>{headline.network}</span>
            <span>{headline.publishedAt}</span>
          </div>
          <h1>{headline.headline}</h1>
          <div id="icons">
            <div id="trio">
              <div id="like">
                <HiOutlineThumbUp />
                <span>Like</span>
              </div>
              <div>
                <RiHandHeartLine />
                <span>{headline.likes}</span>
              </div>
              {headline.comments && (
                <div>
                  <BiComment />
                  <span>{headline.comments}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="imageDots">
        <img src={headline.image} alt="" />
        <div id="ellipsis">
          <AiOutlineEllipsis />
        </div>
      </div>
    </StyledHeadline>
  );
};

export default Headline;
