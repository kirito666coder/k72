import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Agency from "../pages/Agency"
import Work from "../pages/Work"
import NavBar from "../components/Navigation/NavBar"
import Contact from "../pages/Contact"

const Allroutes = () => {

  return (
    <>
     <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/work" element={<Work/>}/>

            <Route path="/agency" element={<Agency/>}/>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default Allroutes
