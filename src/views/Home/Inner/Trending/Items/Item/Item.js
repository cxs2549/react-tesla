import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";

const StyledItem = styled.div`
  height: 360px;
  min-width: 260px;
  width: 65%;
  background-color: #00000059;

  border-radius: 8px;
  margin-right: 0.75rem;
  display: grid;
  grid-template-rows: repeat(2, 50%);
  #image {
    
   img {
     max-width: 100%;
     min-height: 50%;
     object-fit: cover;
   }
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    height: 40vh;
  }
  #text {
    padding: 1rem;
    display: grid;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    #source {
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
    #title {
      font-size: 55%;
      margin-top: 2px;
      margin-bottom: 0.75rem;
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
          padding: 6px 2px;
        }
        svg {
          font-size: 1.2rem;
        }
        span {
          margin-left: 0.25rem;
          font-size: 80%;
        }
        #like {
          padding: 6px 12px;
          margin-right: 0.5rem;
          display: flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 99999px;
        }
      }
    }
  }
`;

const Item = ({ item }) => {
  return (
    <StyledItem  id="item">
      <div id="image">
        <img src={item.image} alt="" />
      </div>
      <div id="text">
        <div id="source">
          <span>{item.network}</span>
          <span>{item.publishedAt}</span>
        </div>
        <div id="title">
          <h1>{item.headline}</h1>
        </div>
        <div id="icons">
          <div id="trio">
            <div id="like">
              <HiOutlineThumbUp />
              <span>Like</span>
            </div>
            <div>
              <RiHandHeartLine />
              <span>{item.likes}</span>
            </div>
            {item.comments && (
              <div>
                <BiComment />
                <span>{item.comments}</span>
              </div>
            )}
          </div>
          <div>
            <AiOutlineEllipsis />
          </div>
        </div>
      </div>
    </StyledItem>
  );
};

export default Item;
