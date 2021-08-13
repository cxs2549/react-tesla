import { useRoutes } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyle from "./globalStyles";
import Article from "./views/Article/Article";
import Home from "./views/Home/Home";

const routes = [{ path: "/", element: <Home /> }, {path: '/articles/:id', element: <Article />}];


const App = () => {
 
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{element}</main>
    </>
  );
};

export default App;
