import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import Chart from './Chart';
//Componenti

export default function StockDetail({ id, nome, valore, percentuale, checked }) {

    const valueText = "text-md";
    const labelText = "text-sm text-gray-700";

    return (
        <div className='w-full md:w-[calc(50%-0.40rem)] h-min flex flex-wrap gap-y-5 items-center justify-between rounded-md p-4 text-center bg-gray-200'>
            <p className={valueText}>{nome} <br /><span className={labelText}>Nome</span></p>
            <p className={valueText}>{valore} <br /><span className={labelText}>$</span></p>
            <p className={valueText}>{percentuale} <br /> <span className={labelText}>%</span></p>
            <p><ToggleSwitch attivo={checked} /></p>
            <Chart />
        </div>
    )
}
