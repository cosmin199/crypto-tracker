const Coin = ({ name, image, symbol, price, volume }) => {
  return (
    <div className="coin-cointainer">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Coin
