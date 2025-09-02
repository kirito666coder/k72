import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-3 text-4xl font-[font2] rounded-full bg-black text-white shadow-lg hover:text-lime-300 cursor-pointer transition"
        >
          Back to top
        </button>
      )}
    </div>
  );
};

export default BackToTop;
