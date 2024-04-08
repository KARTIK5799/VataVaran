import {  createContext,useContext ,useEffect,useState} from "react";

const ThemeContext =createContext();

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider=({children})=>{
const [isDarkMode,setIsDarkMode]=useState(true);

const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };
  

const theme=isDarkMode?"light":"dark";

useEffect(()=>{
    const htmlTag = document.documentElement;

    htmlTag.setAttribute("data-theme", theme);
},[isDarkMode])

return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)

}

