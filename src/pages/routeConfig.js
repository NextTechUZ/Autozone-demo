import Catalogs from "./Catalogs";
import HomePage from "./HomePage";
import '../styles/globals.scss';
import '../styles/index.scss';
import { Notfont } from "./Notfont/Notfont";


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
    }
]