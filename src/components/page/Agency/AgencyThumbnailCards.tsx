
function AgencyThumbnailCards() {
  return (
    <>
    <div className="group transition-all duration-100 cursor-pointer mt-40 md:mt-90 h-[900px] w-full sticky top-0 rounded-4xl overflow-hidden">
       <div className="z-20 h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center font-[font2]">
        <h3 className="text-xl">Lamajeure</h3>
        <h2 className=" text-5xl  group-hover:border-b-6 transition-all duration-100">Lamajeure</h2>
       </div>
       <div className="absolute top-0 left-0 h-full w-full group-hover:bg-black/20 z-10"></div>
      <img src="./images/chalaxeur-thumbnail_img.jpg" className="  transition-all duration-600 group-hover:scale-105 h-full w-full object-cover " alt="" />
    </div>
    <div className="group transition-all duration-100 cursor-pointer mt-40 md:mt-90 h-[900px] w-full sticky top-0 rounded-4xl overflow-hidden">
       <div className="z-20 h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center font-[font2]">
        <h3 className="text-xl">GardaWorld</h3>
        <h2 className=" text-5xl  group-hover:border-b-6 transition-all duration-100">Crisis24</h2>
       </div>
       <div className="absolute top-0 left-0 h-full w-full group-hover:bg-black/20 z-10"></div>
      <img src="./images/crisis24_behance.jpg" className="  transition-all duration-600 group-hover:scale-105 h-full w-full object-cover " alt="" />
    </div>
    <div className="group transition-all duration-100 cursor-pointer  mt-40 md:mt-90 h-[900px] w-full sticky top-0 rounded-4xl overflow-hidden">
       <div className="z-20 h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center font-[font2]">
        <h3 className="text-xl">Lassonde</h3>
        <h2 className=" text-5xl  group-hover:border-b-6 transition-all duration-100">Fruite</h2>
       </div>
       <div className="absolute top-0 left-0 h-full w-full group-hover:bg-black/20 z-10"></div>
      <img src="./images/Fruite_thumbnail_bbq.jpg" className="  transition-all duration-600 group-hover:scale-105 h-full w-full object-cover " alt="" />
    </div>
  </>
  )
}

export default AgencyThumbnailCards
