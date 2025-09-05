import { useEffect, useRef, useState } from "react"
import ContactCard from "../components/page/Contact/ContactCard"

const Contact = () => {
  const list = [
    "To talk about your project",
    "To talk about your brand",
    "To talk about natural wine",
    "To talk results",
    "To talk about nothing in particular",
    "To talk for the sake of talking",
    "To talk about your goals",
    "To talk about Myspace",
    "To talk about the funnel",
    "To talk about diversity",
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  const [rot, setrot] = useState('')
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const scrollHeight = el.scrollHeight / 2 
      if (el.scrollTop >= scrollHeight) {
       
        el.scrollTop = el.scrollTop - scrollHeight
      } else if (el.scrollTop <= 0) {
  
        el.scrollTop = el.scrollTop + scrollHeight
      }

      if(el.scrollTop > lastScrollY.current){
        setrot('-rotate-6')
      }else{
        setrot('rotate-6')
      }
      lastScrollY.current = el.scrollTop
    }

    el.addEventListener("scroll", onScroll)
    return () => el.removeEventListener("scroll", onScroll)
  }, [])
  

  return (
    <div
      ref={scrollRef}
      className="bg-black text-white overflow-y-auto h-screen" 
    >
      {[...list, ...list].map((title, inx) => (
        <ContactCard key={inx} title={title} inx={inx % list.length} rot={rot} />
      ))}
    </div>
  )
}

export default Contact
