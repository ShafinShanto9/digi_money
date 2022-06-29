import React, { useState } from "react"
import ShowCoin from "./ShowCoin"

const SearchCoins = ({ coins }) => { 
  const [searchCoinText, setSearchCoinText] = useState('')
  return (
    <div>
      <div>
        <h1>Search Coins</h1>
        <form>
          <input onChange={(e)=> setSearchCoinText(e.target.value)} type="text" placeholder="Search Coins" />
        </form>
        <ShowCoin coins={ coins} searchCoinText={searchCoinText}  />
      </div>
    </div>
  )
}

export default SearchCoins