import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Momento 1',
        valore: 4000,
    },
    {
        name: 'Momento 2',
        valore: 3000,
    },
    {
        name: 'Momento 3',
        valore: 2000,
    },
    {
        name: 'Momento 4',
        valore: 2780,
    },
    {
        name: 'Momento 5',
        valore: 1890,
    },
    {
        name: 'Momento 6',
        valore: 2390,
    },
    {
        name: 'Momento 7',
        valore: 3490,
    },
];


export default function Chart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                width={500}
                height={300}
                data={data}
                >
                <CartesianGrid strokeDasharray="5 5" stroke="#121212" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valore" stroke="#fafafa" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
