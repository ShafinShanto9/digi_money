import CoinItem from './CoinItem';

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
                        <CoinItem coin={ coin} />
                      ))
                  }
              </tbody>
        </table> 
  )
}

export default ShowCoin