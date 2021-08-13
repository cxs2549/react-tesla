import styled from "styled-components";

const StyledLinks = styled.nav`
  ul {
    display: flex;
    gap: 2rem;
    text-transform: capitalize;
    font-size: 13px;
    display: none;
    /* li:is(:nth-of-type(2),:nth-of-type(3),:nth-of-type(4), :nth-of-type(5),:nth-of-type(6), :nth-of-type(7), :nth-of-type(8)) {
      display: none;
    } */
  }
`;

const Links = () => {
  const links = [
    "images",
    "videos",
    "shopping",
    "maps",
    "news",
    "MSN",
    "eSports",
    "office",
  ];
  const officeLinks = [{ name: "", image: "" }];
  return (
    <StyledLinks>
      <ul>
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </StyledLinks>
  );
};

export default Links;
