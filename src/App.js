import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Account from "./pages/Account";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  }, [url])
  
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins={ coins} />}></Route>
        <Route path="/coinpage" element={<CoinPage/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
