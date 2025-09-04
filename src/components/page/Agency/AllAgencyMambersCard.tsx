import { useState } from "react";

const AllAgencyMambersCard = () => {
    
    const jobs = [
        {
          "role": "Account executive",
          "name": "Sophie Auger",
          "image": "./images/SophieA.jpg"
        },
        {
          "role": "Business Lead",
          "name": "Carl Godbout",
          "image": "./images/Carl.jpg"
        },
        {
          "role": "Copywriter",
          "name": "Camille Brière",
          "image": "./images/CAMILLE.jpg"
        },
        {
          "role": "Account Manager",
          "name": "Claire Robert",
          "image": "./images/Claire.jpg"
        },
        {
          "role": "EVP & Managing Director",
          "name": "Pierre-Luc Paiement",
          "image": "./images/PLP2.jpg"
        },
        {
          "role": "Art Director",
          "name": "Mélanie Laviolette",
          "image": "./images/MEL.jpg"
        },
        {
          "role": "Director of Strategy",
          "name": "Michèle Riendeau",
          "image": "./images/Michele.jpg"
        },
        {
          "role": "Account Director",
          "name": "Meggie Lavoie",
          "image": "./images/MEGGIE.jpg"
        },
        {
          "role": "Graphic Designer",
          "name": "Olivier Duclos",
          "image": "./images/Olivier.jpg"
        },
        {
          "role": "Associate Creative Director",
          "name": "Joël Letarte",
          "image": "./images/joel.jpg"
        },
        {
          "role": "Creative Director",
          "name": "Chantal Gobeil",
          "image": "./images/Chantal.jpg"
        },
        {
          "role": "Associate Creative Director",
          "name": "Sébastien Roy",
          "image": "./images/SebR.jpg"
        }
      ]
      
      const [currentImage, setCurrentImage] = useState('');
      const [ishover, setishover] = useState(false)

  return (
    <div className="bg-teal-200 h-[648px] w-full relative">
      <div className=" rounded-4xl overflow-hidden h-100 w-70 sticky top-90 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
      <img src={`${currentImage}`} className={`h-full object-cover ${ishover?'w-full':'w-0'}  transition-all duration-300`} alt="" />
      </div>

      <ul className="h-full w-full absolute top-0 left-0">
        {
            jobs.map((job,inx)=>(
        <li
        onMouseEnter={() =>{ 
        setCurrentImage(job.image)
        setishover(true)
        }}
        onMouseLeave={()=> {
        setCurrentImage(job.image)
        setishover(false)
        }}
        key={inx} className="flex justify-between hover:bg-lime-300 hover:text-black bg-black border-t-2 border-t-gray-400 p-2 cursor-pointer">
            <span className="text-xs  uppercase">{job.role} </span>
            <span className="text-3xl md:text-54xl uppercase">{job.name}</span>
        </li>
            ))
        }

      </ul>
    </div>
  )
}

export default AllAgencyMambersCard
