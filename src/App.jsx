import { useEffect, useState } from "react"
import { Child } from "./Child"

function App() {
  const [isDarkMode, setIsDarbkMode] = useState(false)

  function toggleTheme(){
    setIsDarbkMode(d => !d)
  }

  useEffect(()=>{
    document.body.background = isDarkMode ? '#333' : "white"
    document.body.style.color = isDarkMode ? "white" : "#333"
  }, [isDarkMode])


  return (
  <>
    <Child isDarkMode= {isDarkMode} toggleTheme = {toggleTheme}/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci alias modi veniam tempora excepturi aliquam, laborum dolores! Odit ut iure magnam eligendi iusto. Obcaecati saepe voluptatibus impedit sint amet!
        </p> 
  </>
  )
}

export default App
