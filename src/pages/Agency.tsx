import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

const Agency = () => {

  const imageDivRef = useRef<HTMLImageElement>(null)

  const imagesArray =[
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    if (!imageDivRef.current) return;
    gsap.to(imageDivRef.current,{
    scrollTrigger:{
      trigger:imageDivRef.current,
      start:'top 28%',
      end:'end -140%',
      pin:true,
      onUpdate:(elem)=> {
        let imageIndex;
        if(elem.progress<1){
           imageIndex = Math.floor(elem.progress * imagesArray.length)
        }else{
            imageIndex = imagesArray.length-1
        }
        imageDivRef.current!.src = imagesArray[imageIndex]
      }
    }
    })
  })

 

  return (
    <div className="font-[font2]">

      <div className="section-1">

        <img ref={imageDivRef} src={`${imagesArray[0]}`} className="bg-blue-400 w-[19vw] h-[25vw] md:w-[15vw] md:h-[20vw] absolute top-85 left-[33vw] rounded-2xl"/>


        <div className="mt-90 md:mt-166 relative">
          <h1 className="text-[18vw] text-center leading-[15vw] flex justify-center uppercase">
            Sixty-seventh
            Twelve
          </h1>
        </div>

        <div className="relative text-2xl md:text-7xl flex justify-center items-center md:justify-end mt-40 md:mt-0">
          <p className="w-[93%] indent-35 md:indent-45 md:w-[55%]">Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a story. If we forget that, we may make good numbers in the short term, but we'll kill it in the long term. That's why we're committed to providing perspective, to building influential brands.</p>
        </div>

      </div>

      <div>
        <div className="mt-30 text-2xl font-[font2]">
          <div className="w-[97%] md:w-full mx-auto flex justify-between md:justify-around ">
            <h2>Expertise</h2>
            <ul>
              <li>Strategy</li>
              <li>Advertisement</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
            <div></div>
          </div>
          <div className="mt-20">
            <ul className="flex gap-10 md:flex-row flex-col w-[97%] mx-auto md:w-full md:justify-around">
              <li className="md:w-120">Our projects are born in humility, grow in curiosity and live thanks to creativity in all its forms.</li>
              <li className="md:w-120">Our creativity thrives in an environment where talent thrives. Where we feel free to be the best version of ourselves.</li>
              <li className="md:w-120">Our culture is openness to others. Period. The entire crew contributes to building an agency we're proud of.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Agency
