import { useContext } from "react"
import BackToTop from "./BackToTop"
import { useNavigate } from "react-router-dom"
import { ContextForNav } from "../../../context/ContextForNav"

const Footer = () => {

    const navigate = useNavigate()

    const {setNavigateContext} = useContext(ContextForNav)
  
    const handleClick = ({value}:{value:string})=>{
      setNavigateContext(value)
     setTimeout(() => {
       navigate(value)
     }, 1000);
   }
  return (
    <div className="bg-black min-h-[800px] md:min-h-[600px] w-full mt-5 flex flex-col items-center md:items-end md:justify-between justify-end font-[font2] relative">
    <div className="absolute top-0 left-0 mt-2 flex gap-2 ">
      <span className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-4 border-white text-5xl md:text-9xl  px-4 rounded-full leading-8 pt-2 md:leading-22 md:pt-5 md:px-6">fb</span>
      <span className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-4 border-white text-5xl md:text-9xl  px-4 rounded-full leading-8 pt-2 md:leading-22 md:pt-5 md:px-6">ig</span>
      <span className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-4 border-white text-5xl md:text-9xl  px-4 rounded-full leading-8 pt-2 md:leading-22 md:pt-5 md:px-6">in</span>
      <span className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-4 border-white text-5xl md:text-9xl  px-4 rounded-full leading-8 md:leading-22 md:pt-5 md:px-6 pt-2">be</span>
    </div>

    <h3 onClick={()=>handleClick({value:'/contact'})} className="hover:text-lime-300 hover:border-lime-300 cursor-pointer  uppercase text-white text-9xl px-6 border-white border-4 rounded-full leading-22 pt-4 md:mt-4">Contact</h3>
    <div>
    <BackToTop/>
    </div>
  </div>
  )
}

export default Footer
