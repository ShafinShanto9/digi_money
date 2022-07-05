import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Account from "./pages/Account";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=15&page=1&sparkline=true"
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  }, [url])
  
  return (
    <ThemeProvider>
      <AuthContextProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home coins={ coins} />}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
