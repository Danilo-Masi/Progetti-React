import React from 'react';
//Componenti
import { ColLayout } from './Layout';

export default function Logo() {
    return (
        <ColLayout
            height="h-1/6"
            justify="justify-center">
            <h1 className='text-3xl italic md:text-4xl'>NasdaqReact</h1>
        </ColLayout>
    )
}
