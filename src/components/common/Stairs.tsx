import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useRef } from "react"
import { ContextForNav } from "../../context/NavContext"

const Stairs = ({children}) => {

   const {NavigateContext}= useContext(ContextForNav)

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(()=>{
      const tl = gsap.timeline()
      console.log(NavigateContext)
      if(NavigateContext !== undefined){

        tl.to(stairParentRef.current, {
          display:'block'
        })
        
        tl.from('.stairs',{
          height:'0',
          stagger:{
            amount:-0.3
          },
        })
        
      }

      tl.to('.stairs',{
        y:'100%',
        stagger:{
          amount:-0.3
        }
      })
  
      tl.to(stairParentRef.current, {
        display:'none'
      })
  
      tl.to('.stairs',{
        y:'0%',
      })
  
    },[NavigateContext])
  
  return (
    <>
    <div ref={stairParentRef} className="h-screen w-screen fixed z-20 top-0">
    <div className="h-full w-full flex">
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
    </div>
    </div>
    <div ref={pageRef}>
    {children}
    </div>
    </>
  )
}

export default Stairs
