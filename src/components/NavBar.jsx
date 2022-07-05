import { motion } from "framer-motion"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  
  const handleNavToggle = () => {
    setNav(!nav)
  }

  const handleLogout = async() => {
    try {
      await logOut()
      navigate('/')
    } catch (e){
      console.log(e.message);
    }
  }
  
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
      {user?.email ? (
        <div>
          <Link to='/account' className="p-4">Account</Link>
          <motion.button onClick={handleLogout} whileTap={{scale: 0.5}} className='ml-2 border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-red-400 hover:text-white '>LogOut</motion.button>
        </div>
      ) : (
        <motion.div className="hidden md:block" >

        <Link to="/signin" className="p-4 hover:text-accent">Sign-In</Link>

       <motion.button whileTap={{scale:0.6}}>
        <Link to="/signup" className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">
           Sign-Up
          </Link>
        </motion.button>
        
      </motion.div>
        )}
      {/* Menu Icon */}
      <div className="block md:hidden cursor-pointer z-10" onClick={handleNavToggle}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={ 20} />}
      </div>
      {/* Mobile Menu */}
      <div className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
        
        <div className="ml-auto py-1 border-b border-r"><ThemeToggle /></div>
        
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/home">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>  
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 py-3 bg-primary text-primary border border-secodary rounded-2xl shadow-xl ">Sign-In</button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 py-3 bg-button text-btnText rounded-2xl shadow-xl">Sign-Up</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar