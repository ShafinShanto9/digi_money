import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const SavedCoin = () => {

    const [conis, setCoins] = useState([])

  return (
    <div>
        {
        conis.length === 0 ?  <p>
          You don't have any coins saved. Please save a coin to add it to your
          Saved list. <Link to='/'><span className='font-bold text-accent '>Click here to search coins.</span></Link>
        </p> : (
            <table className='w-full border-collapse text-center'>
                <thead>
                  <tr className='border-b'>
                      <th className='px-4'>Rank #</th>            
                      <th className='text-left'>Coin</th>            
                      <th className='text-left'>Remove</th>            
                    </tr>       
                </thead>  
            <tbody>              
                 {
                conis.map((coin) => (
                    <tr key={coin.id} className="h-[60px] overflow-hidden">
                        <td>
                            {coin?.rank}
                        </td>
                        <td>
                            <Link to={`coin/${coin.id}`}>
                                <div className='flex items-center'>
                                    <img src={coin?.image} className="w-8 mr-4" alt="" />
                                    <div>
                                        <p className='hidden sm:table-cell'>{coin?.name}</p>
                                        <p className='text-gray-500 text-sm text-left'>{ coin?.symbol.toUppercase()}</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td className='pl-8'>
                            <AiOutlineClose className='cursor-pointer'/>
                        </td>
                    </tr>
                  
                  ))                
               }               
            </tbody>
                          
            </table>          
        )
       }    
    </div>
  )
}

export default SavedCoin