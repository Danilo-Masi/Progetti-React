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
    return (
        <div
            className={`w-full flex flex-wrap flex-col ${itemPosition ? itemPosition : 'items-center'} md:${flexDirection} ${height} ${justify} ${gap} ${overflow} ${color}`}>
            {children}
        </div>
    );
}

