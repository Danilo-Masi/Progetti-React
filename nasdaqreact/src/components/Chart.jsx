import React, { useState } from 'react';
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Chart({ datiGrafico, periodSelected }) {

    const [dataFormattata, setDataFormattata] = useState("");

    //Funzione per formattare i dati da inserire nel grafico
    const trasformedData = datiGrafico.map((entry) => {
        if (periodSelected === "1h" || periodSelected === "24h") {
            const timestamp = new Date(entry.timestamp * 1000);
            const ora = timestamp.getHours().toString().padStart(2, '0');
            const minuti = timestamp.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${ora}:${minuti}`;
            setDataFormattata(formattedTime);
        }
        return {
            data: dataFormattata,
            valore: parseFloat(entry.price),
        };
    });

    return (
        <ResponsiveContainer width="100%" height={200} >
            <AreaChart
                width={500}
                height={300}
                data={trasformedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <Tooltip />
                <Area type="monotone" dataKey="valore" stroke="#82ca9d" fill='#82ca9d' />
            </AreaChart>
        </ResponsiveContainer>
    );
}
