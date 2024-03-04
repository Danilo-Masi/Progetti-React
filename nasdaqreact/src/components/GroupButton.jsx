import React from 'react';

export default function GroupButton({ onPeriodSet, periodSelected }) {
    
    const handlePeriodChange = (time) => {
        onPeriodSet(time);
    };

    const buttonClass = "w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700";
    const activeButtonClass = "bg-blue-500 text-white"; // Aggiungi qui le classi CSS per evidenziare il pulsante attivo

    return (
        <div className="w-full flex items-center justify-center shadow-sm" role="group">
            {["1h", "24h", "7d", "30d", "1y"].map((time) => (
                <button
                    key={time}
                    onClick={() => handlePeriodChange(time)}
                    type="button"
                    className={`${buttonClass} ${periodSelected === time ? activeButtonClass : ''}`}
                >
                    {time === "30d" ? "1M" : time.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
