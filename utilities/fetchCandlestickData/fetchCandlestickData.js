// utils/fetchCandlestickData.js

export async function fetchCandlestickData(symbol) {
    const res = await fetch(`http://localhost:3000/api/candles/${symbol}`);
    if (!res.ok) throw new Error('Failed to fetch candle data');
    return await res.json();
}
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
