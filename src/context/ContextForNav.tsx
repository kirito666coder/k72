import { createContext } from "react";

interface NavContextType {
    NavigateContext?: string|undefined; 
    setNavigateContext: React.Dispatch<React.SetStateAction<string|undefined>>;
  }
  
  export const ContextForNav = createContext<NavContextType>({
    NavigateContext: undefined,
    setNavigateContext: () => {}, 
  });