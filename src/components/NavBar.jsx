import { motion } from "framer-motion"
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <motion.div
          whileTap={{ scaleY: 0.5 }}>
          <h1 className="text-2xl">DIGI-MONEY</h1>
        </motion.div>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle/>
      </div>
      <div className="hidden md:block">
        <Link to="/signin">Sign-In</Link>
        <Link to="/signup">Sign-Up</Link>
      </div>
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
    </div>
  )
}

export default NavBar