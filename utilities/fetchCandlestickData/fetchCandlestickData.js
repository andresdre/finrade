// utils/fetchCandlestickData.js

export async function fetchCandlestickData(symbol) {
    const res = await fetch(`http://localhost:5000/api/candles/${symbol}`);
    if (!res.ok) throw new Error('Failed to fetch candle data');

    const data = await res.json();

    const timeSeries = data['Time Series (5min)'];
    if (!timeSeries) throw new Error('Malformed API response: missing time series data');
    
    const candles = Object.entries(timeSeries)
        .map(([timestamp, values]) => ({
            time: Math.floor(new Date(timestamp).getTime() / 1000),
            open: parseFloat(values['1. open']),
            high: parseFloat(values['2. high']),
            low: parseFloat(values['3. low']),
            close: parseFloat(values['4. close']),
        }))
        .reverse();

    return candles;
    }
