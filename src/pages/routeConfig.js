import Catalogs from "./Catalogs";
import HomePage from "./HomePage";
<<<<<<< HEAD
import '../styles/globals.scss';
import '../styles/index.scss';
import { Notfont } from "./Notfont/Notfont";
import Company from "./Company";


export const routes = [
    {
        id:1,
        path:"/",
        element: <HomePage/> 
    },
    {
        id:2,
        path:"/catalog",
        element: <Catalogs/>
    },
    {
        id:3,
        path:"*",
        element: <Notfont/> 
    },
    {
        id:4,
        path:"/Company",
        element: <Company/> 
    }
]
=======
import "../styles/globals.scss";
import "../styles/index.scss";
import { Notfount } from "./Notfount/index";
import Product from "./Products";
import Product_Appearance from "./Products/Product/Product_appearance/index";
import Kompany_question from "./Kompany_question";

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
  {
    id: 6,
    path: "/question",
    element: <Kompany_question />,
  },
];
>>>>>>> eb62c614a7cc51f0585b1c7ff32ba74c8ef47bb5
