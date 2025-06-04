// CandleChart.jsx
import React, { useEffect, useRef } from 'react';
import { CandlestickSeries, createChart } from 'lightweight-charts';

const CandleChart = ({ candles }) => {
    const chartContainerRef = useRef();
    const chartRef = useRef();

    useEffect(() => {
        if (!candles || candles.length === 0 || !chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.offsetWidth || 800,
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

        chartRef.current = chart;
        const candleSeries = chart.addSeries(CandlestickSeries);
        candleSeries.setData(candles);

        const resizeObserver = new ResizeObserver(() => {
            chart.applyOptions({
                width: chartContainerRef.current.offsetWidth,
            });
        });
        resizeObserver.observe(chartContainerRef.current);

        return () => {
            resizeObserver.disconnect();
            chart.remove();
        };
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
