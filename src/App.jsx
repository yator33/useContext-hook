import { createContext, useEffect, useState } from "react"
import { Child } from "./Child"

export const ThemeContext = createContext()

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme(){
    setIsDarkMode(d => !d)
  }

  useEffect(()=>{
    document.body.background = isDarkMode ? '#333' : "white"
    document.body.style.color = isDarkMode ? "white" : "#333"
  }, [isDarkMode])


  return (
  <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
    
   <Child isDarkMode= {isDarkMode} toggleTheme = {toggleTheme}/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci alias modi veniam tempora excepturi aliquam, laborum dolores! Odit ut iure magnam eligendi iusto. Obcaecati saepe voluptatibus impedit sint amet!
        </p> 
  </ThemeContext.Provider>
  )
}


