import HomeBottomText from "../components/page/Home/HomeBottomText"
import HomeCenterText from "../components/page/Home/HomeCenterText"
import HomeHeroText from "../components/page/Home/HomeHeroText"
import Video from "../components/page/Home/Video"

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
      <Video/>
      </div>
      <div className="min-h-screen w-full relative flex flex-col justify-center lg:justify-start items-center ">
        <HomeHeroText/>
        <HomeCenterText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
