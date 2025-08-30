import { createContext, useState } from "react"

export const ContextForNav = createContext(null)

const NavContext = ({children}) => {

    const [NavigateContext, setNavigateContext] = useState()

  return (
    <ContextForNav.Provider value={{NavigateContext,setNavigateContext}}>
     {children}
    </ContextForNav.Provider>
  )
}

export default NavContext
