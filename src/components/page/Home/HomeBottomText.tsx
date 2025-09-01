import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ContextForNav } from "../../../context/ContextForNav"

const HomeBottomText = () => {

  const navigate = useNavigate()
  const {setNavigateContext} = useContext(ContextForNav)

  const handleClick = ({value}:{value:string})=>{
     setNavigateContext(value)
    setTimeout(() => {
      navigate(value)
    }, 1000);
  }

  return (
    <div className="w-full flex justify-center gap-5 overflow-hidden mt-10">
      <div onClick={()=>{handleClick({value:'./work'})}} className="hover:text-lime-400 hover:border-lime-400 cursor-pointer transition-all duration-100 flex font-[font2] text-[7.5vw] md:text-[7vw] px-8 md:px-10 border-5 border-white rounded-full uppercase leading-none items-end">
        <span className="relative top-[0.6rem] md:top-[0.4rem] leading-15 md:leading-30">work</span>
      </div>
      <div onClick={()=>{handleClick({value:'./agency'})}} className="hover:text-lime-400 hover:border-lime-400 cursor-pointer transition-all duration-100 flex font-[font2] text-[7.5vw] md:text-[7vw] px-8 md:px-10 border-5 border-white rounded-full uppercase leading-none items-end">
        <span className="relative top-[0.6rem] md:top-[0.4rem] leading-15 md:leading-30">Agency</span>
      </div>
    </div>
  )
}

export default HomeBottomText
