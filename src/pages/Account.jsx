import SavedCoin from "../components/SavedCoin"
import { motion } from "framer-motion"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Account = () => {
  const { logOut, user } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await logOut()
      navigate('/')
    } catch (e){
      console.log(e.message);
    }
  }
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div>
          <h1 className='text-2xl font-bold'>Account</h1>
          <div>
            <p>Welcome { user?.email}</p>
          </div>
        </div>
        <div>
          <motion.button onClick={handleLogout} whileTap={{scale: 0.5}} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-red-400 hover:text-white '>Sign Out</motion.button>
        </div>
      </div>
      <div flex justfiy-between items-center my-12 py-8 rounded-div>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-2xl font-bold py-4'>Saved Coins List</h1>
          <SavedCoin/>
        </div>
      </div>
    </div>
  )
}

export default Account