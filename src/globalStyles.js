import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  scrollbar-width: none;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* overflow-y: hidden; */
	height: 100vh;
}

:root {
  --navBGC: rgba(0,0,0,.9);
  --svgSize: 1.55rem;
	--boxShadow: 0px 2px 8px rgba(0,0,0,0.2);
	--textShadow: 0px 0px 3px rgba(0,0,0,0.5);
}

`;

export default GlobalStyle;
