import React from 'react';

function Container({ fluid, children, className }) {
    const containerClass = `container${fluid ? "-fluid" : ""} ${className ? className : ''}`;
    return <div className={containerClass}>{children}</div>;
}

function Row({ children, className }) {
    const rowClass = `flex ${className ? className : ''}`;
    return <div className={rowClass}>{children}</div>;
}

export default function Layout({ children }) {
    return (
        <Container fluid={true}>
            <Row>{children}</Row>
        </Container>
    )
}

function Col({ children, size, className = " ", style }) {
    const colClass = `flex-${size} w-32 ${className}`;
    return (
        <div className={colClass} style={style}>
            {children}
        </div>
    )
}

export function LeftCol({ children }) {
    return (
        <Col
            size="3"
            className='bg-gray-200 p-3 overflow-y-auto h-screen'
            style={{
                boxShadow: "-1px 0 0 rgba(0,0,0,0.1)",
            }}>
            {children}
        </Col>
    )
}

export function RightCol({ children }) {
    return (
        <Col
            size="9"
            className='p-3 overflow-y-auto h-screen'>
            {children}
        </Col>
    )
}
