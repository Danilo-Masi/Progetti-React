import React from 'react';

export default function StockList({ children }) {
    return (
        <div className='w-full h-4/6 flex flex-col gap-3 overflow-scroll'>
            {children}
        </div>
    );
}
