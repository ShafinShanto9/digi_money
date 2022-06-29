import SearchCoins from "../components/SearchCoins"
import TrensdingCoins from "../components/TrensdingCoins"

const Home = ({ coins }) => {
  
  return (
    <div>
      <SearchCoins coins={coins} />
      <TrensdingCoins/>
    </div>
  )
}

export default Home