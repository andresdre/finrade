// StockChart.jsx
import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockChart = ({ labels, data }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Stock Price',
                data: data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default StockChart;
