import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const ShowCoin = ({ coins, searchCoinText }) => {
  
  return (
        <table className='w-full border-collapse text-center'>
              <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>      
                </tr>
              </thead>  
              <tbody>
                  {
            coins.filter((value) => {
                    
                    if (searchCoinText === '') {
                      return value;
                    } else if (
                      value.name.toLowerCase().includes(searchCoinText.toLowerCase())
                    ) {
                      return value
                    }
              
                      }).map((coin) => (
                          <tr key={coin.id} className="h-[90px] border-b overflow-hidden">
                              <td><AiOutlineStar/></td>
                              <td>{ coin.market_cap_rank }</td>
                              <td>
                                <div className='flex items-center'>
                                  <img className='w-6 mr-2 rounded-full' src={coin.image} alt="coin image" />
                                  <p className='hidden sm:table-cell'>{ coin.name}</p>
                                </div>
                              </td>
                              <td>{ coin.symbol.toUpperCase()}</td>
                              <td>${ coin.current_price.toLocaleString()}</td>
                              <td>
                                  {coin.price_change_percentage_24h > 0 ? (
                                      <p className='text-green-600'>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                      </p>
                                    ) : (
                                      <p className='text-red-600'>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                      </p>
                                    )}
                              </td>
                              <td className='w-[180px] hidden md:table-cell'>${ coin.total_volume.toLocaleString()}</td>
                              <td className='w-[180px] hidden sm:table-cell'>${ coin.market_cap.toLocaleString()}</td>
                              <td>
                                  <Sparklines data={coin.sparkline_in_7d.price}>
                                    <SparklinesLine color="green" />
                                  </Sparklines>
                              </td>
                          </tr>
                      ))
                  }
              </tbody>
        </table> 
  )
}

export default ShowCoin