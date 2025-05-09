// utils/fetchStockData.js

const BASE_URL = 'https://www.alphavantage.co/query';
const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

export async function fetchIntradayStockData(symbol = 'AAPL') {
  const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  const timeSeries = data['Time Series (5min)'];
  if (!timeSeries) {
    throw new Error('Invalid or missing data');
  }

  const labels = Object.keys(timeSeries).reverse();
  const prices = labels.map(time => parseFloat(timeSeries[time]['4. close']));

  return { labels, prices };
}
