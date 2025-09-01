import { useGSAP } from "@gsap/react"
import ProjectsCard from "../components/page/Work/ProjectsCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const Work = () => {


  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    },
  ]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div>
      <div>
        <h1 className="text-8xl mt-[49vh] font-[font2] ml-2 md:text-[16rem] relative">WORK <span className="text-3xl absolute top-1 md:top-3 md:text-6xl">16</span></h1>
      </div>

      <div className="lol">
        {
          projects.map((project,indx) =>
            <div key={indx} className="hero w-full h-[850px]  mt-[-15px] md:mt-[-45px] gap-3 md:px-3  flex md:flex-row flex-col mb-7 md:mb-15">
              <ProjectsCard project={project} />
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Work
