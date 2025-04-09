// utils/fetchCandlestickData.js
const API_KEY = 'NVVEYKOLN2BZO';
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchCandlestickData(symbol = 'AAPL') {
    const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    const timeSeries = data['Time Series (5min)'];
    if (!timeSeries) throw new Error('Missing time series data');

    const candles = Object.entries(timeSeries)
        .map(([timestamp, values]) => ({
            time: Math.floor(new Date(timestamp).getTime() / 1000), // UNIX timestamp
            open: parseFloat(values['1. open']),
            high: parseFloat(values['2. high']),
            low: parseFloat(values['3. low']),
            close: parseFloat(values['4. close']),
        }))
        .reverse();

    return candles;
}
