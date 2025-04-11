// utils/fetchStockData.js
const API_KEY = 'NVVEYKOLN2BZOSJR';
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchIntradayStockData(symbol = 'AAPL') {
  const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  const timeSeries = data['Time Series (5min)'];
  if (!timeSeries) {
    throw new Error('Invalid or missing data');
  }

  const labels = Object.keys(timeSeries).reverse(); // Timestamps
  const prices = labels.map(time => parseFloat(timeSeries[time]['4. close'])); // Closing prices

  return { labels, prices };
}
