import { useContext } from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
      <div>
      {theme === 'dark' ? (
        <div className="cursor-pointer" onClick={()=>setTheme(theme === "dark" ? "light": "dark")}>
          <HiSun className='text-primary text-2xl mr-2' /> Light Mode
        </div>
      ) : (
        <div className="cursor-pointer" onClick={()=>setTheme(theme === "dark" ? "light": "dark")}>
          <HiMoon className='text-primary text-2xl mr-2' /> Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle