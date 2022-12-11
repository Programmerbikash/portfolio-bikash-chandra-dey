import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Home from "../PortfolioContainer/Home/Home";
import DetailsAboutProject from "../PortfolioContainer/Home/Project/DetailsAboutProject";
import Resume from "../PortfolioContainer/Resume/Resume";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/resume",
          element: <Resume></Resume>,
        },
        {
          path: "/aboutMe",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/details",
          element: <DetailsAboutProject></DetailsAboutProject>,
        },
      ],
    },
  ]);