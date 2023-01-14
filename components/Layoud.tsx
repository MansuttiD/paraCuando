import Header from "./Header"
import Navbar from "./Navbar"

export default function Layoud ({ children })  {

    return (
        <>
            <Header/>
                { children }
            <Navbar/>
        </>
    )
  }