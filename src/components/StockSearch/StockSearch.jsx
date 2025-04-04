import { useState } from "react";
import axios from "axios";

const StockSearch = ({ onSelectStock }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const API_KEY = "NVVEYKOLN2BZOSJR";

    const handleSearch = async () => {
        if (query.length < 1) return;

        try {
            const response = await axios.get(
                `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
            );
            setResults(response.data.bestMatches || []);
        } catch (error) {
            console.error("Error fetching stock data:", error);
        }
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search for a stock (e.g. AAPL)"
                className="p-2 border rounded w-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleSearch}>
                Search
            </button>

            {results.length > 0 && (
                <ul className="mt-4 border p-2">
                    {results.map((stock, index) => (
                        <li
                            key={index}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => onSelectStock(stock["1. symbol"])}
                        >
                            {stock["1. symbol"]} - {stock["2. name"]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StockSearch;
