import GrowingImage from "../components/page/Work/GrowindImage"
import Footer from "../components/page/Work/Footer"

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

     <Footer/>
  
    </div>
  )
}

export default Work
