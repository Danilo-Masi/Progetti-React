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
        <div className={`${width} ${mdWidth} h-svh ${color} flex flex-col items-center justify-start p-5`}>
            {children}
        </div>
    );
}

// Layout.js
export function ColLayout({ children, height, color, justify, gap, overflow }) {
    return (
        <div
            className={`w-full flex flex-col items-center ${height} ${justify} ${gap} ${overflow} ${color}`}>
            {children}
        </div>
    );
}

