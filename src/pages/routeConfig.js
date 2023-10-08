import Catalogs from "./Catalogs";
import HomePage from "./HomePage";
import "../styles/globals.scss";
import "../styles/index.scss";
import { Notfount } from "./Notfount/index";
import Products from "./Products";
import Kompany_question from "./Kompany_question";
import Product from "./Product";
import Company from "./Company";

export const routes = [ 
  {
    id: 1,
    path: "/", 
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/catalog",
    element: <Catalogs />,
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
];
