import React from 'react';

function Container({ children }) {
    return (
        <div className='flex flex-row w-full h-svh'>
            {children}
        </div>
    );
}

export default function Layout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}

export function Col({ children, size, color, gap, margin, overflow, padding }) {
    return (
        <div
            className={`${size} ${color} h-full flex flex-col ${gap ? gap : ""} 
            ${margin ? margin : ""} ${overflow ? overflow : ""} ${padding ? padding : ""}`}>
            {children}
        </div>
    );
}

export function LeftCol({ children }) {
    return (
        <Col size="w-1/4" color="bg-slate-200">
            {children}
        </Col>
    );
}

export function RigthCol({ children }) {
    return (
        <Col size="w-3/4">
            {children}
        </Col>
    );
}

export function Row({ children, height }) {
    return (
        <div className={`w-full ${height} flex items-center justify-center`}>
            {children}
        </div>
    );
}
