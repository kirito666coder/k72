import Video from "./Video"

const HomeHeroText = () => {
    return (
        <div className="mt-65 md:mt-0 uppercase text-[12vw] md:text-[9.5vw] font-[font1]  w-[80%] flex flex-wrap justify-center items-center mx-auto">
            <div className="flex justify-center items-center leading-[11vw] md:leading-[9vw]">The spark</div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[9vw]">Who <div className="md:h-[7vw] h-[9vw] md:min-w-[16vw] min-w-[20vw] rounded-full overflow-hidden"><Video/></div>  </div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[9vw]">generates</div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[9vw]">there</div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[9vw]"> creativity</div>
        </div>
    )
}

export default HomeHeroText
