import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines,SparklinesLine  } from 'react-sparklines';

const ShowCoin = ({coins}) => {
  return (
    <div>
        <table>
              <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>24h Volume</th>
                    <th>Mkt</th>
                    <th>Last 7 Days</th>      
                </tr>
              </thead>  
              <tbody>
                  {
                      coins.map((coin) => (
                          <tr key={coin.id}>
                              <td><AiOutlineStar/></td>
                              <td>{ coin.market_cap_rank }</td>
                              <td>
                                <div>
                                  <img src={coin.image} alt="coin image" />
                                  <p>{ coin.name}</p>
                                </div>
                              </td>
                              <td>{ coin.symbol}</td>
                              <td>{ coin.current_price}</td>
                              <td>{ coin.price_change_percentage_24h}</td>
                              <td>{ coin.total_volume}</td>
                              <td>{ coin.market_cap}</td>
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
    </div>
  )
}

export default ShowCoin