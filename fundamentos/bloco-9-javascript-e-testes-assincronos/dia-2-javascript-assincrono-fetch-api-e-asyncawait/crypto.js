const API_URL = 'https://api.coincap.io/v2/assets';

const fecthCryptoCoins = async () => {
    const fetchCoins = await fetch(API_URL)
      .then(response => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());

      return fetchCoins;
}

const setCoins = async () => {
  const cryptoCoins = await fecthCryptoCoins();

  const cryptoList = document.getElementById('coins');

  cryptoCoins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');

    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

    cryptoList.appendChild(newLi);

  });
}

window.onload = () => setCoins();
