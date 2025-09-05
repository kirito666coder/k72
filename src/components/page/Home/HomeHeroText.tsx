import Video from "./Video"

const HomeHeroText = () => {
    return (
        <div className="mt-75 md:mt-0 uppercase text-[12vw] md:text-[8.5vw] font-[font1]  w-[90%] flex flex-wrap justify-center items-center mx-auto">
            <div className="text-nowrap flex justify-center items-center leading-[11vw] md:leading-[7.9vw]">The spark for</div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[7.9vw]">all <div className="md:h-[7vw] h-[9vw] md:min-w-[16vw] min-w-[20vw] rounded-full overflow-hidden"><Video/></div>things</div>
            <div className="flex justify-center items-center leading-[11vw] md:leading-[7.9vw]"> creativity</div>
        </div>
    )
}

export default HomeHeroText
