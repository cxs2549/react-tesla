import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";

const StyledStory = styled.div`
  background-color: black;
  color: white;
  height: auto;
  padding: 1rem;
  h1 {
    font-size: 180%;
    margin-bottom: 0.25rem;
  }
  #source {
    span {
      font-size: 80%;
      margin-right: 0.5rem;
      &:nth-of-type(2)::after {
        content: "•";
        padding-left: 0.5rem;
        opacity: 0.7;
      }
    }
  }
  #icons {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  
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
        padding: 6px 0;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 99999px;
      }
    }
    #ellipsis {
      padding: 6px 6px;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 99999px;
    }
  }
  #image {
    margin-bottom: 1em;
    img {
      max-height: 30vh;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
    span, p {
      font-size: 80%;
      margin-top: .25em;
    }
  }
`;

const Story = ({ article }) => {
  return (
    <StyledStory>
      <h1>{article.headline}</h1>
      <div id="source">
        <span>{article.source.author}</span> <br />
        <span>Published {article.source.publishedAt} ago</span>
        <span>{article.source.timeToRead} read</span>
      </div>
      <div id="icons">
        <div id="trio">
          <div id="like">
            <HiOutlineThumbUp />
            <span>Like</span>
          </div>
          <div>
            <RiHandHeartLine />
            <span>{article.likes}</span>
          </div>
          {article.comments && (
            <div>
              <BiComment />
              <span>{article.comments}</span>
            </div>
          )}
        </div>
      </div>
      <div id="image">
        <img src={article.image} alt="" />
        <span>{article.caption}</span> <br />
        <p>{article.headline}</p>
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam hic sunt repellat fugit nostrum nihil consectetur incidunt. Quasi totam magni, nihil libero architecto consectetur eveniet nam ullam repellat impedit culpa voluptatum soluta consequatur at ipsam, tempore molestiae dolorem laborum! Nobis, tempora totam, fuga quae sit sint animi ducimus a corporis omnis quidem. Dolor, ea iusto. Atque dolor quisquam sint dignissimos repellendus corrupti autem! Sit officiis facilis, qui explicabo aliquam atque ad eligendi sunt quisquam maiores dolorum animi alias, non consequuntur quasi unde ullam aspernatur laudantium. Enim minus, cum itaque dolorum nisi facere aliquid ut ipsa tenetur, eligendi, odio cupiditate eius ad doloremque fugiat! Pariatur officiis consequuntur architecto necessitatibus, assumenda dolor recusandae veniam maxime, obcaecati repudiandae rem iste ea fugiat explicabo nesciunt laborum, amet numquam sapiente. Quibusdam autem illum odit quis laboriosam! Aliquam rerum saepe natus sequi deserunt necessitatibus tempore aperiam dignissimos reprehenderit recusandae expedita, maiores distinctio itaque ipsa, soluta illum! Velit tenetur modi et, vero consectetur nesciunt amet quos, assumenda harum blanditiis recusandae impedit fugit similique natus nihil voluptatem, provident repellendus non error repellat reiciendis quas eum deserunt quam. Doloremque nihil, optio laboriosam voluptas explicabo earum dignissimos ut aliquid cum. Velit quos recusandae non labore nemo sequi sapiente maxime?</div>
      <div>comments component</div>
      <div>more for you</div>
    </StyledStory>
  );
};

export default Story;
