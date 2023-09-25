import { Footer } from "./footer/footer"
import { Navbar } from "./navbar/navbar" 
import { Slider , Showbottom } from "./slider/slider"

export function HomePage(){
    return(
       <>
        <Navbar />
        <Slider />
        <Showbottom />
        <Footer/>
       </>
    )
}