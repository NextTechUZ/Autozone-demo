 import Catalogs from "./Catalogs";
import HomePage from "./HomePage";

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
    }
]