import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ datiGrafico }) {

    //Funzione per trasformare l'array preso dalla chiamata all'API e tradurlo in dati
    //funzionali per il chart
    const trasformedData = datiGrafico.slice(0, 5).map((entry) => {
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

    return (
        <ResponsiveContainer width="100%" height={300} >
            <LineChart
                width={500}
                height={300}
                data={trasformedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#383838" />
                <XAxis dataKey="data" />
                <Tooltip />
                <Line type="monotone" dataKey="valore" stroke="#0a6ef8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
