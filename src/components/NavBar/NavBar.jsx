// src/components/NavBar/NavBar.jsx

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="p-4 bg-gray-900 text-white flex justify-between">
            <h1 className="text-xl font-bold">FinRade</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:text-gray-400">Home</Link>
                <Link to="/char" className="hover:text-gray-400">Charts</Link>
                <Link to="/watchlist" className="hover:text-gray-400">Watchlist</Link>
            </div>
        </nav >
    );
};

export default NavBar;
