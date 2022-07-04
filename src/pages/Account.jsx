import SavedCoin from "../components/SavedCoin"
import { motion } from "framer-motion"

const Account = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div>
          <h1 className='text-2xl font-bold'>Account</h1>
          <div>
            <p>Welcome User</p>
          </div>
        </div>
        <div>
          <motion.button className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Out</motion.button>
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