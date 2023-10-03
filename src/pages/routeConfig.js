import Catalogs from "./Catalogs";
import HomePage from "./HomePage";
import "../styles/globals.scss";
import "../styles/index.scss";
import { Notfount } from "./Notfount/index";
import Product from "./Products";
import Product_Appearance from "./Products/Product/Product_appearance";

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
    element: <Product />,
  },
  {
    id: 5,
    path: "/product/:id",
    element: <Product_Appearance />,
  },
];
