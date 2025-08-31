import { useState } from "react";

type HoverBoxProps = {
    title: string;
    children: React.ReactNode;
};

const HoverBox = ({ title, children }: HoverBoxProps) => {
    const [origin, setOrigin] = useState<"top" | "bottom">("top");

    const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        setOrigin(y < rect.height / 2 ? "top" : "bottom");
    };

    const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        setOrigin(y < rect.height / 2 ? "top" : "bottom");
    };

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative border-y-2 border-y-white/50 text-[7rem] md:text-[10rem] 
                 md:h-40 h-27 font-[font2] leading-20 overflow-hidden group"
        >
            <h1 className="pt-7 md:pt-14 w-full text-center transition-all group-hover:opacity-0 opacity-100 duration-200">
                {title}
            </h1>

            <div
                className={`absolute top-0 left-0 w-full h-full flex gap-4 group-hover:opacity-100 opacity-0 text-black transition-all duration-200`}
            >
                <div
                 className={`absolute top-0 left-0 w-full h-full flex gap-4 bg-lime-300 text-black 
                    scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out
                    ${origin === "top" ? "origin-top" : "origin-bottom"}`}
                >

                </div>
                <div className="pt-7 md:pt-14 md:pb-10 w-full flex items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

const FullScreenNav = () => {
    return (
        <div className=" h-screen w-full absolute bg-black text-white flex flex-col justify-center">
            {/* WORK */}
            <HoverBox title="WORK">
                <div className="flex items-center scroll-left">
                    <span className="mx-4 whitespace-nowrap">SEE EVERYTHING</span>
                    <img className=" h-18 w-50 md:h-30 md:w-100  rounded-full mx-4" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">SEE EVERYTHING</span>
                    <img className=" h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">SEE EVERYTHING</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">SEE EVERYTHING</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />


                </div>
            </HoverBox>

            {/* AGENCY */}
            <HoverBox title="AGENCY">
                <div className="flex items-center scroll-left2">
                    <span className="mx-4 whitespace-nowrap">KNOW US</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/teamMembers/Arnaud_640X290-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">KNOW US</span>
                    <img className="h-18 w-50 md:h-30 md:w-100  rounded-full mx-4" src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">KNOW US</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/teamMembers/Arnaud_640X290-640x290.jpg" />
                    <span className="mx-4 whitespace-nowrap">KNOW US</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />


                </div>
            </HoverBox>

            {/* CONTACT */}
            <HoverBox title="CONTACT">
                <div className="flex scroll-left3 items-center">
                    <span className="mx-4 whitespace-nowrap">SEND US A FAX</span>
                    <svg className="w-20 h-20 mx-2" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"></path>
                    </svg>

                    <span className="mx-4 whitespace-nowrap">SEND US A FAX</span>
                    <svg className="w-20 h-20 mx-2" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"></path>
                    </svg>

                    <span className="mx-4 whitespace-nowrap">SEND US A FAX</span>
                    <svg className="w-20 h-20 mx-2" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"></path>
                    </svg>

                    <span className="mx-4 whitespace-nowrap">SEND US A FAX</span>
                    <svg className="w-20 h-20 mx-2" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"></path>
                    </svg>
                </div>
            </HoverBox>

            {/* BLOG */}
            <HoverBox title="BLOG">
                <div className="flex items-center  scroll-left4">
                    <span className="mx-4 whitespace-nowrap">READ ARTICLES</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                    <span className="mx-4 whitespace-nowrap">READ ARTICLES</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />
                    <span className="mx-4 whitespace-nowrap">READ ARTICLES</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                    <span className="mx-4 whitespace-nowrap">READ ARTICLES</span>
                    <img className="h-18 w-50 md:h-30 md:w-100 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />


                </div>
            </HoverBox>
        </div>
    );
};

export default FullScreenNav;
