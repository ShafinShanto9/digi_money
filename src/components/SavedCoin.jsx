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
            <table>
                <thead>
                  <tr>
                      <th>Rank #</th>            
                      <th>Coin</th>            
                      <th>Remove</th>            
                    </tr>       
                </thead>  
            <tbody>              
                 {
                conis.map((coin) => (
                    <tr key={coin.id}>
                        <td>
                            {coin?.rank}
                        </td>
                        <td>
                            <Link to={`coin/${coin.id}`}>
                                <div>
                                    <img src={coin?.image} alt="" />
                                    <div>
                                        <p>{coin?.name}</p>
                                        <p>{ coin?.symbol.toUppercase()}</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>
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