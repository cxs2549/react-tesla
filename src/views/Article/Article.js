import styled from "styled-components";
import Searchbar from "../Home/Inner/Searchbar/Searchbar";
import Source from "./Source/Source";
import Story from "./Story/Story";
import bi from "../../assets/articles/bi.png";
import article1 from "../../assets/articles/article-1.jpg";

const StyledArticle = styled.div`
  background-color: #343434;
  padding-top: 0.75rem;
`;

const Article = () => {
  const articles = [
    {
      id: 0,
      source: {
        network: "The Week",
        author: "Samuel Goldman",
        image: bi,
        publishedAt: "3 hours",
        timeToRead: "1-min"
      },
      headline:
        "Israel's Olympic hero can't get married, but that may soon change",
      image: article1,
      caption: "Provided by The Week",
      caption2: "Israel's Olympic hero can't get married, but that may soon change",
      likes: 11,
      comments: 1,
    },
  ];
  return (
    <StyledArticle>
      <Searchbar noweather />
      <Source article={articles[0]} />
      <Story article={articles[0]} />
    </StyledArticle>
  );
};

export default Article;
