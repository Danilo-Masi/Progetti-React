import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='w-screen min-h-svh flex flex-col md:flex-row bg-gray-100'>
            {children}
        </div>
    );
}

export function Col({ children, width, mdWidth, color }) {
    return (
        <div className={`h-svh flex flex-col items-centers justify-start p-5 ${width} ${mdWidth} ${color}`}>
            {children}
        </div>
    );
}

export function ColLayout({ children, height, color, justify, gap, overflow, flexDirection, itemPosition }) {
    const itemPx = itemPosition ? itemPosition : "items-center";
    return (
        <div
            className={`w-full flex flex-wrap flex-col md:${flexDirection} ${itemPx} ${height} ${justify} ${gap} ${overflow} ${color}`}>
            {children}
        </div>
    );
}

export function Container({ larghezza, altezza, itemPosition, children }) {
    const width = larghezza ? larghezza : 'w-1/4';
    const height = altezza ? altezza : 'h-auto';
    return (
        <div className={`justify-center flex flex-col ${width} ${height} ${itemPosition}`}>
            {children}
        </div>
    );
}

