// ChartPage.jsx
import React, { useEffect, useState } from 'react';
import StockChart from '../../components/StockChart/StockChart';
import CandleChart from '../../components/CandleChart/CandleChart';
import { FetchIntradayStockData } from '../../../utilities/FetchStockData/FetchStockData';
import { FetchCandlestickData } from '../../../utilities/FetchCandlestickData/FetchCandlestickData';


const ChartPage = () => {
    const [candles, setCandles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCandles = async () => {
            try {
                const result = await fetchCandlestickData('AAPL');
                setCandles(result);
                console.log("Candles fetched from API:", result);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        loadCandles();
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>📈 AAPL Stock Chart (Live)</h2>
            {loading ? <p>Loading chart...</p> : <CandleChart candles={candles} />}
        </div>
    );
};

export default ChartPage;
