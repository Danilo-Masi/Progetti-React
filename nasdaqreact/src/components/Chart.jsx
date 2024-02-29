import React from 'react';
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Chart({ datiGrafico }) {

    //Funzione per trasformare l'array preso dalla chiamata all'API e tradurlo in dati
    //funzionali per il chart
    const trasformedData = datiGrafico.map((entry) => {
        //Formatta la data (ora:minuti)
        const timestamp = new Date(entry.timestamp * 1000);
        const ora = timestamp.getHours().toString().padStart(2, '0');
        const minuti = timestamp.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${ora}:${minuti}`;
        return {
            data: formattedTime,
            valore: parseFloat(entry.price),
        };
    });

    const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
        return (
            <g transform={`translate(${x}, ${y})`}>
                <text x={0} y={0} dy={15} textAnchor="end" fill="#666" transform="rotate(-45)">
                    {payload.value}
                </text>
            </g>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={200} >
            <AreaChart
                width={500}
                height={300}
                data={trasformedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" tick={<CustomizedAxisTick />} />
                <Tooltip />
                <Area type="monotone" dataKey="valore" stroke="#82ca9d" fill='#82ca9d' />
            </AreaChart>
        </ResponsiveContainer>
    );
}
