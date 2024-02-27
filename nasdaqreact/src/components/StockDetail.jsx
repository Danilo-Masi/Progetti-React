import React from 'react';
//Componenti
import Chart from './Chart';

function UnsavedButton({ id }) {
    return (
        <button className="w-1/3 flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
        </button>
    );
}

export default function StockDetail({ id, nome, simbolo, valore, percentuale }) {

    return (
        <div className='w-full md:w-[calc(50%-0.65rem)] h-min flex flex-col flex-wrap gap-y-5 items-center justify-between rounded-md p-3 text-center bg-gray-200'>
            
            <div className=' w-full justify-between items-center flex flex-wrap gap-y-5'>
                <div className='w-2/3 flex items-center gap-3'>
                    <div className='w-12 h-12 bg-red-500 rounded-full' />
                    <h1 className='text-xl'>{nome}<span className='text-sm text-gray-500'> ({simbolo})</span></h1>
                </div>
                <UnsavedButton id={id} />
                <div className='w-full flex items-center gap-3'>
                    <h1 className='text-4xl'>{valore}</h1>
                    <p className='text-sm text-gray-500'>{percentuale} %</p>
                </div>
            </div>

            <Chart />
        </div>
    )
}
