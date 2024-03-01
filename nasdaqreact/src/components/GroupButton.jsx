import React, { useState, useMemo } from 'react';

export default function GroupButton({ onPeriodSet }) {

    const [tempo, setTempo] = useState("1y");

    //Hook useMemo() che permette all'app di verificare se una funzioen sia cambiata
    //se lo è si aggiorna, se non lo è rimane invariata, cosi da non permettere 
    //ulteriori aggiornamenti inutili
    const memoizedOnPeriodSet = useMemo(() => onPeriodSet, [onPeriodSet]);

    const handlePeriodChange = (time) => {
        alert("Period impstato: " + time);
        setTempo(time);
        memoizedOnPeriodSet(time);
    }

    const buttonClass = "w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700";

    return (
        <div className="w-full flex items-center justify-center rounded-md shadow-sm" role="group">
            <button
                onClick={() => handlePeriodChange("1h")}
                type="button"
                className={`${buttonClass}  ${'rounded-s-lg'} ${tempo === "1h" ? 'z-10 ring-2 ring-blue-500 text-white bg-blue-500' : ''}`}>
                1H
            </button>
            <button
                onClick={() => handlePeriodChange("24h")}
                type="button"
                className={`${buttonClass} ${tempo === "24h" ? 'z-10 ring-2 ring-blue-500 text-white bg-blue-500' : ''} `}>
                24H
            </button>
            <button
                onClick={() => handlePeriodChange("7d")}
                type="button"
                className={`${buttonClass} ${tempo === "7d" ? 'z-10 ring-2 ring-blue-500 text-white bg-blue-500' : ''}`}>
                7D
            </button>
            <button
                onClick={() => handlePeriodChange("30d")}
                type="button"
                className={`${buttonClass} ${tempo === "30d" ? 'z-10 ring-2 ring-blue-500 text-white bg-blue-500' : ''}`}>
                1M
            </button>
            <button
                onClick={() => handlePeriodChange("1y")}
                type="button"
                className={`${buttonClass} ${'rounded-e-lg'} ${tempo === "1y" ? 'z-10 ring-2 ring-blue-500 text-white bg-blue-500' : ''}`}>
                1Y
            </button>
        </div>
    )
}
