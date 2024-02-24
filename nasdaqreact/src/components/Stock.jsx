import React from 'react';

function SaveButton({ onClick }) {
    return (
        <button onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

        </button>
    );
}

export default function Stock({ nome, simbolo, onSaveStocks }) {

    const valueText = "text-md";
    const labelText = "text-sm text-gray-700";

    return (
        <div className='w-full flex justify-between p-3 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50'>
            <p className={valueText}>{nome} - <span className={labelText}>{simbolo}</span></p>
            <SaveButton onClick={onSaveStocks} />
        </div>
    )
}
