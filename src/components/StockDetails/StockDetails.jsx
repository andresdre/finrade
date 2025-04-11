import { useEffect, useState } from "react";
import axios from "axios";

const StockDetails = ({ symbol }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        setData(response.data["Global Quote"]);
      } catch (error) {
        console.error("Error fetching stock details:", error);
      }
    };

    if (symbol) {
      fetchStockDetails();
    }
  }, [symbol]);

  if (!data) return <p>Loading stock details...</p>;

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{data["01. symbol"]} Stock Info</h3>
      <p><strong>Price:</strong> ${parseFloat(data["05. price"]).toFixed(2)}</p>
      <p><strong>Open:</strong> ${parseFloat(data["02. open"]).toFixed(2)}</p>
      <p><strong>High:</strong> ${parseFloat(data["03. high"]).toFixed(2)}</p>
      <p><strong>Low:</strong> ${parseFloat(data["04. low"]).toFixed(2)}</p>
      <p><strong>Previous Close:</strong> ${parseFloat(data["08. previous close"]).toFixed(2)}</p>
      <p><strong>Volume:</strong> {Number(data["06. volume"]).toLocaleString()}</p>
      <p><strong>Last Updated:</strong> {data["07. latest trading day"]}</p>
    </div>
  );
};

export default StockDetails;
