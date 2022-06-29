import React, { useState } from "react"
import ShowCoin from "./ShowCoin"

const SearchCoins = ({ coins }) => { 
  const [searchCoinText, setSearchCoinText] = useState('')
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
          <h1 className="text-2xl font-bold my-2">Search Coins</h1>
        <form>
          <input
          onChange={(e) => setSearchCoinText(e.target.value)}
          className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
          type="text"
          placeholder="Search Coins" />
        </form>  
      </div>
      <ShowCoin coins={ coins} searchCoinText={searchCoinText}  />    
    </div>
  )
}

export default SearchCoins