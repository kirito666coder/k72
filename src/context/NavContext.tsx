import { useState, type ReactNode } from "react"
import { ContextForNav } from "./ContextForNav"


const NavContext = ({children}:{children:ReactNode}) => {

    const [NavigateContext, setNavigateContext] = useState<string>()

  return (
    <ContextForNav.Provider value={{NavigateContext,setNavigateContext}}>
     {children}
    </ContextForNav.Provider>
  )
}

export default NavContext
