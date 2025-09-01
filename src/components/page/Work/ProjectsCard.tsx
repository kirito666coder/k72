
type projectCardprop={
   project:{
       image1:string
       image2:string
    }
}

const ProjectsCard = ({project}:projectCardprop) => {
  return (
    <>
    <div className=" md:w-1/2 h-full hover:rounded-[50px] md:hover:rounded-[70px] overflow-hidden transition-all duration-300 relative group">
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 hidden group-hover:flex justify-center items-center ">
        <span className="transition-all duration-300 opacity-0 group-hover:opacity-90 font-[font2] text-white text-7xl border-4 px-5 pt-2 rounded-full ">
          VIEW PROJECT
          </span>
        </div>
        <img className="h-full w-full object-cover" src={`${project.image1}`} alt="" />
        </div>
    <div className=" md:w-1/2 h-full hover:rounded-[50px] md:hover:rounded-[70px] overflow-hidden transition-all duration-300 relative group">
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 hidden group-hover:flex justify-center items-center ">
        <span className="transition-all duration-300 opacity-0 group-hover:opacity-90 font-[font2] text-white text-7xl border-4 px-5 pt-2 rounded-full ">
          VIEW PROJECT
          </span>
        </div>
        <img className="h-full w-full object-cover" src={`${project.image2}`} alt="" />
        </div>
    </>
  )
}

export default ProjectsCard
