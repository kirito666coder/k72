
const ContactCard = ({title,inx,rot}:{title:string,inx:number,rot:string}) => {
 

    return (
        <div key={inx} className=" min-h-full w-full bg-black font-[font2]">

            <div className="pt-25 md:pt-4 flex justify-around">
                <div className="w-48 text-center self-end text-sm md:text-lg">Onscreen or in an office. Here. There. Anywhere.</div>
                <div className="text-6xl uppercase w-90 text-center md:text-[10rem] md:w-160 leading-14 md:leading-35 h-fit">{title}</div>
                <div className="w-48 text-center self-end text-sm md:text-lg md:w-54">525 Av. Viger O - Suite 400 Montréal, QC H2Z 1G6 →</div>
            </div>
            <div className=" h-50 md:h-100 w-full mt-15 overflow-hidden flex justify-center items-center">
                <div 
                    className={` ${rot} transition-all duration-1000 bg-white text-black h-19 md:h-40 md:text-[150px]  min-w-[105%] text-[65px] relative group`}>
                    <div className="transition-all h-full group-hover:h-0 w-full bg-lime-300 absolute top-0 left-0"></div>
                    <div className="scroll-to-left leading-22 md:leading-44">
                        <div className="flex items-center h-full w-full gap-3">
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                        </div>
                        <div className="flex items-center h-full w-full gap-3">
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                            <span className=" text-nowrap uppercase">hello world@72 $$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:mb-30">
                <h5 className="uppercase">follow us</h5>
                <div className=" mt-2 flex gap-2 ">
                    <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-8xl  px-2 rounded-4xl md:rounded-full md:leading-19 leading-8  md:px-4 md:pt-2">fb</div>
                    <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-8xl  px-2 rounded-4xl md:rounded-full md:leading-19 leading-8  md:px-4 md:pt-2">ig</div>
                    <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-8xl  px-2 rounded-4xl md:rounded-full md:leading-19 leading-8  md:px-4 md:pt-2">in</div>
                    <div className="hover:text-lime-300 hover:border-lime-300 cursor-pointer text-white uppercase border-2 border-white text-4xl md:text-8xl  px-2 rounded-4xl md:rounded-full md:leading-19 leading-8  md:px-4 md:pt-2">be</div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
