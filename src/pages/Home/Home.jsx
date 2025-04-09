import { useState } from "react";
import StockSearch from "../../components/StockSearch/StockSearch.jsx";
import StockDetails from "../../components/StockDetails/StockDetails.jsx";

const Home = () => {
    const [selectedStock, setSelectedStock] = useState(null);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Welcome to FinRade</h2>
            <StockSearch onSelectStock={setSelectedStock} />

            {selectedStock && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="text-xl font-bold">Selected Stock: {selectedStock}</h3>
                    <StockDetails symbol={selectedStock} />
                </div>
            )}
        </div>
    )
}

export default Home;
