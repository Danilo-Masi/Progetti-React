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
        <div className={`h-svh flex flex-col items-center justify-start p-5 ${width} ${mdWidth} ${color}`}>
            {children}
        </div>
    );
}

export function ColLayout({ children, ...props }) {
    return (
        <div className={`w-full flex flex-wrap flex-col md:flex-row ${props.itemPosition ?? "items-center"} ${props.height ?? "h-auto"} ${props.justify ?? ""} ${props.gap ?? ""} ${props.overflow ?? ""} ${props.color ?? ""}`}>
            {children}
        </div>
    );
}

export function Container({ larghezza, altezza, itemPosition, children }) {
    return (
        <div className={`justify-center flex flex-col ${larghezza ?? 'w-1/4'} ${altezza ?? 'h-auto'} ${itemPosition ?? ''}`}>
            {children}
        </div>
    );
}
