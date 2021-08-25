import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"
import Coin from "./Coin"

function App() {
  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCrypto(res.data)
      })
      .catch((error) => alert("yoo error"))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = crypto.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h2 className="coin-text">search a crypto</h2>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((crypto) => {
        return (
          <Coin
            key={crypto.id}
            name={crypto.name}
            image={crypto.image}
            symbol={crypto.symbol}
            marketcap={crypto.market_cap}
            price={crypto.current_price}
            priceChange={crypto.price_change_percentage_24h}
            volume={crypto.total_volume}
          />
        )
      })}
    </div>
  )
}

export default App
