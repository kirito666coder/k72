import { useContext } from 'react'
import BackToTop from '../Work/BackToTop'
import { ContextForNav } from '../../../context/ContextForNav'
import { useNavigate } from 'react-router-dom'

const FooterForAgency = () => {
    const navigate = useNavigate()

    const {setNavigateContext} = useContext(ContextForNav)
  
    const handleClick = ({value}:{value:string})=>{
      setNavigateContext(value)
     setTimeout(() => {
       navigate(value)
     }, 1000);
   }
  return (
    <div className=" sticky top-300 bg-black min-h-[400px] md:min-h-[600px] w-full mt-5 flex flex-col items-center md:items-end md:justify-between justify-end font-[font2] ">
    <div className="absolute top-0 left-0 mt-2 flex gap-2 ">
      <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-5xl  px-2 rounded-4xl md:leading-12 leading-8  md:px-4 md:mt-4">fb</div>
      <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-5xl  px-2 rounded-4xl md:leading-12 leading-8  md:px-4 md:mt-4">ig</div>
      <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-5xl  px-2 rounded-4xl md:leading-12 leading-8  md:px-4 md:mt-4">in</div>
      <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-5xl  px-2 rounded-4xl md:leading-12 leading-8  md:px-4 md:mt-4">be</div>
    </div>

    <h3 onClick={()=>handleClick({value:'/contact'})} className="hover:text-lime-300 hover:border-lime-300 cursor-pointer  uppercase text-white text-5xl px-6 border-white border-4 rounded-full leading-12 pt-2 md:mt-4">Contact</h3>
    <div>
    <BackToTop/>
    </div>
  </div>
  )
}


export default FooterForAgency
