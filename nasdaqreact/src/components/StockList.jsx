import React from 'react';
import { ColLayout } from './Layout';

export default function StockList({ children, altezza }) {
    return (
        <ColLayout
            height={altezza}
            gap="gap-3"
            justify="justify-start"
            overflow="overflow-auto">
            {children}
        </ColLayout>
    )
}
