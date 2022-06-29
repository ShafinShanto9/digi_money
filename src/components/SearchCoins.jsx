import React from "react"
import ShowCoin from "./ShowCoin"
const SearchCoins = ({ coins }) => {
  
  return (
    <div>
      <div>
        <h1>Search Coins</h1>
        <form>
          <input type="text" placeholder="Search Coins" />
        </form>
        <ShowCoin coins={ coins} />
      </div>
    </div>
  )
}

export default SearchCoins