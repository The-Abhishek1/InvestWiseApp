const twelveData = require("twelvedata");

const config = {
  key: "27be5a0f7f644c38be5a4a7a4cfa1b90",
};

const API_KEY = "27be5a0f7f644c38be5a4a7a4cfa1b90";

// initialize and use the client
const client = twelveData(config);

//Forex Data
async function Forex() {
  const response = await fetch(`https://api.twelvedata.com/forex_pairs`);
  const data = await response.json();
  console.log(data);
}

Forex();

//Crypto Data
async function Crypto() {
  const response = await fetch(`https://api.twelvedata.com/cryptocurrencies`);
  const data = await response.json();
  console.log(data);
}

Crypto();

//Stocks Data
async function Stocks() {
  const response = await fetch(`https://api.twelvedata.com/stocks`);
  const data = await response.json();
  console.log(data);
}

Stocks();

//ETF'S Data
async function ETFS() {
  const response = await fetch(`https://api.twelvedata.com/etf`);
  const data = await response.json();
  console.log(data);
}

ETFS();

//Indices Data
async function Indices() {
  const response = await fetch(`https://api.twelvedata.com/indices`);
  const data = await response.json();
  console.log(data);
}

Indices();

// let params = {
//   symbol: "SUPARSHAKT:BSE",
//   interval: "1min",
//   outputsize: 2,
// };

// // time series
// client
//   .timeSeries(params)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // earnings
// client
//   .earnings(params)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // api usage
// client
//   .apiUsage()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // technical indicators

// params2 = {
//   symbol: "AAPL",
//   interval: "1min",
//   outputsize: 5,
//   indicator: "stoch",
// };

// client
//   .technicalIndicators(params2)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
