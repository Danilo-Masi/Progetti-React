import React from 'react';
import ToggleSwitch from './ToggleSwitch';
//Componenti

export default function StockDetail({ id, nome, valore, percentuale, checked }) {

    const valueText = "text-md";
    const labelText = "text-sm text-gray-700";

    return (
        <div className='w-full md:w-[calc(33.33%-0.5rem)] h-min flex items-center justify-between rounded-md p-4 text-center bg-gray-300'>
            <p className={valueText}>{nome} <br /><span className={labelText}>Nome</span></p>
            <p className={valueText}>{valore} <br /><span className={labelText}>$</span></p>
            <p className={valueText}>{percentuale} <br /> <span className={labelText}>%</span></p>
            <p><ToggleSwitch attivo={checked} />
                {/*
                <br />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                */}
            </p>
        </div>
    )
}
