import { useContext,useRef,useState, } from "react";
import { ContextForNav } from "../../context/ContextForNav";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
                    scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease
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


const FullScreenNav= ({setshowfullscrean,showfullscrean}) => {

    const navigate = useNavigate()

    const {setNavigateContext} = useContext(ContextForNav)

    const handleClick = ({value}:{value:string})=>{
       setNavigateContext(value)
      setTimeout(() => {
        navigate(value)
      }, 1000);
    }

   

    const fullnavStairRef = useRef(null)
    const fullnavRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline();
      
        if (showfullscrean === "open") {
         
          gsap.set(fullnavStairRef.current, { display: "block" });
          gsap.set(fullnavRef.current, { autoAlpha: 0 }); 
      
        
          tl.fromTo(
            ".stairs",
            { height: "0%" },
            {
              height: "100%",
              stagger: { amount: -0.3 },
              duration: 0.6,
            }
          );
      
       
          tl.to(fullnavRef.current, { autoAlpha: 1, duration: 0.2 }, "-=0.2");
        }
      
        if (showfullscrean === "close") {
        
          tl.to(fullnavRef.current, { autoAlpha: 0, duration: 0.2 });
      
      
          tl.to(".stairs", {
            height: "0%",
            stagger: { amount: 0.3, from: "end" },
            duration: 0.6,
            onComplete: () => {
              gsap.set(fullnavStairRef.current, { display: "none" });
            },
          });
      
          
          tl.call(() => setshowfullscrean(null));
        }
      }, [showfullscrean]);
      

    return (<>
    
     <div ref={fullnavStairRef} className="h-screen w-screen fixed z-20 top-0">
    <div className="h-full w-full flex">
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
     <div className=" stairs h-full w-1/5 bg-black"></div>
    </div>
    </div>
      <div ref={fullnavRef} className=" flex fixed top-0 w-full items-start justify-between z-25">
        <div className="p-3 ">
        <div onClick={()=>handleClick({value:'/'})} className=" w-32 md:w-40 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-full  w-full fill-white  `} viewBox="0 0 103 44">
                      <path fillRule="inherit" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
        </div>
        </div>
           <div onClick={()=>setshowfullscrean('close')} className=" h-full flex mr-16 group cursor-pointer">
      <div className=" inset-0 w-1 h-40  bg-white group-hover:bg-lime-300 rotate-45"></div>
      <div className=" inset-0 w-1 h-40  bg-white group-hover:bg-lime-300 -rotate-45"></div>
    </div>
    </div>
        <div ref={fullnavRef} className="z-20 h-screen w-full absolute bg-black text-white flex flex-col justify-center">
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
    </>
    );
};

export default FullScreenNav;
