// CandleChart.jsx
import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandleChart = ({ candles }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        console.log("Chart rendering", chartContainerRef.current)

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 400,
            layout: {
                backgroundColor: '#fff',
                textColor: '#000',
            },
            grid: {
                vertLines: { color: '#eee' },
                horzLines: { color: '#eee' },
            },
            priceScale: {
                borderColor: '#ccc',
            },
            timeScale: {
                borderColor: '#ccc',
                timeVisible: true,
                secondsVisible: false,
            },
        });

        const candleSeries = chart.addCandlestickSeries();
        candleSeries.setData(candles);

        return () => chart.remove();
    }, [candles]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                width: '100%',
                height: '400px',
                position: 'relative',
            }}
        />
    );
};

export default CandleChart;
