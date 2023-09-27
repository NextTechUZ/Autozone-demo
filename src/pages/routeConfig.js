import Catalogs from "./Catalogs";
import HomePage from "./HomePage";
import '../styles/globals.scss';
import '../styles/index.scss';


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
        
    }
]