import { motion } from 'framer-motion'
import { useContext } from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
      <div whileTap={{scale:0.6}} className="p-2 ">
      {theme === 'dark' ? (
        <div className="cursor-pointer flex items-center" onClick={()=>setTheme(theme === "dark" ? "light": "dark")}>
          <motion.div whileTap={{
            scale: 0.8,
            rotate: -90,
            duration: 3
          }}>
            <HiSun className='text-primary text-2xl mr-2' />
          </motion.div> Light Mode
        </div>
      ) : (
        <div className="cursor-pointer flex items-center" onClick={()=>setTheme(theme === "dark" ? "light": "dark")}>
          <motion.div whileTap={{
            scale: 0.8,
            rotate: -90,
            duration: 3
          }}>
            <HiMoon className='text-primary text-2xl mr-2' />
          </motion.div> Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle