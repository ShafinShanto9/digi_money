import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TrensdingCoins = () => {
    const [trendingCoin, setTrendingCoins] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"
    useEffect(() => {
        axios.get(url).then((response) => {
            setTrendingCoins(response.data.coins)
            
        })
    },[])
    
    return (
        <div className='rounded-div my-12 py-8 text-primary'>
            <h3 className='text-2xl font-bold py-4 '>Trending Coins</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    trendingCoin.map((coin) => (
                        <motion.div whileHover={{ scale: 1.05 }}  className=' rounded-div flex justify-between p-4'>
                            <div className='flex justify-between items-center w-full'>
                               
                                <div className='flex'>
                                     <img className='mr-4 rounded-full ' src={coin.item.small} />
                                    <div
                                    ><p className='font-bold'>{coin.item.name}</p>
                                        <p>{ coin.item.symbol}</p>
                                    </div>    
                                </div>
                               
                                <div className='flex items-center'>
                                    <img className='w-4 mr-2' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                                    <p>{ coin.item.price_btc.toFixed(7)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrensdingCoins