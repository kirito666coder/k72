import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GrowingImage = ({ src,indx }: { src: string ,indx:number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"], 
  });
  const height = useTransform(scrollYProgress, [0, 1], [70, 850]);

  return (
    <div key={indx} className=" h-full hover:rounded-[50px] md:hover:rounded-[70px] overflow-hidden transition-all duration-300 relative group">
    <div className="absolute top-0 left-0 h-full w-full bg-black/30 hidden group-hover:flex justify-center items-center ">
    <span className="transition-all duration-300 opacity-0 group-hover:opacity-90 font-[font2] text-white md:text-7xl text-4xl border-4 px-5 pt-2 rounded-full ">
      VIEW PROJECT
      </span>
    </div>
    <motion.img
      ref={ref}
      src={src}
      style={{ height }}
      className="w-full object-cover"
    />
    </div>
  );
};

export default GrowingImage;
