import { useRoutes } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyle from "./globalStyles";
import Home from "./views/Home/Home";

const routes = [{ path: "/", element: <Home /> }];


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
