import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Agency from "../pages/Agency"
import Work from "../pages/Work"
import Project from "../pages/Project"
import NavBar from "../components/Navigation/NavBar"
import FullScreenNav from "../components/Navigation/FullScreenNav"

const Allroutes = () => {

  return (
    <>
     <NavBar/>
     <FullScreenNav/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/work" element={<Work/>}/>

            <Route path="/agency" element={<Agency/>}/>

            <Route path="/projects" element={<Project/>}/>
        </Routes>
    </>
  )
}

export default Allroutes
