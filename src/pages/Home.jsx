import SearchCoins from "../components/SearchCoins"

const Home = ({ coins }) => {
  
  return (
    <div>
      <SearchCoins coins={ coins} />
    </div>
  )
}

export default Home