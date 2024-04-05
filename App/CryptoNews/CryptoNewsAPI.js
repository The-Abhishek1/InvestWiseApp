API_KEY = "7ED3F060-48A8-4D3F-A66D-C137CB440017";

const assets = ["BTC", "ETH", "XRP"];
fetch(`https://rest.coinapi.io/v1/exchangerate/${assets}`, {
  headers: {
    "X-CoinAPI-Key": API_KEY,
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
