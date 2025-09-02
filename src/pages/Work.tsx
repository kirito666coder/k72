import { useContext } from "react"
import BackToTop from "../components/page/Work/BackToTop"
import GrowingImage from "../components/page/Work/GrowindImage"
import { ContextForNav } from "../context/ContextForNav"
import { useNavigate } from "react-router-dom"

const Work = () => {


  const projects = [

    'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',


    'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',


    'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',


    'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',


    'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',


    'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',

  ]

  const navigate = useNavigate()

  const {setNavigateContext} = useContext(ContextForNav)

  const handleClick = ({value}:{value:string})=>{
    setNavigateContext(value)
   setTimeout(() => {
     navigate(value)
   }, 1000);
 }

  return (
    <div>
      <div>
        <h1 className="text-8xl mt-[49vh] font-[font2] ml-2 md:text-[16rem] relative">WORK <span className="text-3xl absolute top-1 md:top-3 md:text-6xl">16</span></h1>
      </div>
     


      <div className="grid-cols-1 md:grid-cols-2 grid md:mx-4 md:gap-4 gap-3">
        {
          projects.map((project,indx) =>
            <GrowingImage src={`${project}`} indx={indx} />
        )
      }
      </div>

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
  
    </div>
  )
}

export default Work
