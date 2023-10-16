import HomePage from "./HomePage";
import "../styles/globals.scss";
import "../styles/index.scss";
import { Notfount } from "./Notfount/index";
 import  News from "./News";
import SingleNews from "./SingleNews";
import Products from "./Products";
import Kompany_question from './Kompany_question'
import Company from './Company'
import Product from "./Product";
import Category from "./Category";
import Contact from "./Contact";
export const routes = [ 
  {
    id: 1,
    path: "/", 
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/catalog",
    element: <Category />,
  },
  {
    id: 3,
    path: "*",
    element: <Notfount />,
  },
  {
    id: 4,
    path: "/product",
    element: <Products />,
  },
  {
    id: 5,
    path: "/product/:id",
    element: <Product />,
  },
  {
    id: 6,
    path: "/question",
    element: <Kompany_question />,
  },
  {
    id: 7,
    path: "/about",
    element: <Company />,
  },
  {
    id: 6,
    path: "/news",
    element: <News />,
  },
  {
    id: 7,
    path: "/singlenews",
    element: <SingleNews />,
  },
  {
    id: 8,
    path: "/contact",
    element: <Contact/>,
  },
];
