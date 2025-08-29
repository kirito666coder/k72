import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="w-full flex justify-center gap-5 overflow-hidden mt-10">
      <Link to={'/projects'} className="hover:text-lime-400 hover:border-lime-400 cursor-pointer transition-all duration-100 flex font-[font2] text-[7.5vw] md:text-[7vw] px-8 md:px-10 border-5 border-white rounded-full uppercase leading-none items-end">
        <span className="relative top-[0.2em]">Projects</span>
      </Link>
      <Link to={'/agency'} className="hover:text-lime-400 hover:border-lime-400 cursor-pointer transition-all duration-100 flex font-[font2] text-[7.5vw] md:text-[7vw] px-8 md:px-10 border-5 border-white rounded-full uppercase leading-none items-end">
        <span className="relative top-[0.2em]">Agency</span>
      </Link>
    </div>
  )
}

export default HomeBottomText
