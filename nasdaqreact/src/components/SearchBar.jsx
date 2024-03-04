import React, { useState } from 'react';
//Componenti
import { ColLayout } from './Layout';

export default function SearchBar({ onSearchStocks }) {

    const [digit, setDigit] = useState("");

    //Funzione per prendere il valore inserito dall'utente e invocare la ricerca
    const handleSearch = (e) => {
        e.preventDefault();
        if (digit.trim() !== '') {
            onSearchStocks(digit.trim());
        }
        setDigit('');
    };

    //Funzione per gestire il cambiamento dell'input
    const handleChange = (event) => {
        setDigit(event.target.value);
    };

    return (
        <ColLayout height="h-1/6" justify="justify-center">
            <form className="w-full" onSubmit={handleSearch}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search Stocks..."
                        required
                        value={digit}
                        onChange={handleChange} />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">
                        Search
                    </button>
                </div>
            </form>
        </ColLayout>
    );
}
