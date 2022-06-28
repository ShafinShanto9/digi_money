import { motion } from "framer-motion"
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <motion.div
      initial= {{x: -50}}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 2 }}
      
      className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <motion.div
          whileTap={{ scaleY: 0.5 }}>
          <h1 className="text-2xl">DIGI-MONEY</h1>
        </motion.div>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle/>
      </div>
      <motion.div className="hidden md:block" >

        <Link to="/signin" className="p-4 hover:text-accent">Sign-In</Link>

       <motion.button whileTap={{scale:0.6}}>
        <Link to="/signup" className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">
           Sign-Up
          </Link>
        </motion.button>
        
      </motion.div>
      {/* Menu Icon */}
      <div>
        <AiOutlineMenu/>
      </div>
      {/* Mobile Menu */}
      <div >
        <div><ThemeToggle/></div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>  
        </ul>
        <div>
          <Link to="/signin">
            <button>Sign-In</button>
          </Link>
          <Link to="/signup">
            <button>Sign-Up</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar