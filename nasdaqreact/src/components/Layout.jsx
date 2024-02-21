import React from 'react';

function Container({ children }) {
    return (
        <div className='flex flex-row h-screen bg-slate-700'>
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

function Col({ children, size }) {
    return (
        <div className={`w-${size}`}>
            {children}
        </div>
    );
}

export function LeftCol({ children }) {
    return (
        <Col size="1/4">
            {children}
        </Col>
    );
}

export function RigthCol({ children }) {
    return (
        <Col size="3/4">
            {children}
        </Col>
    );
}

export function Row ({children, heigth}) {
    return (
        <div className={`w-full h-${heigth} flex items-center justify-center bg-teal-700`}>
            {children}
        </div>
    );
}
