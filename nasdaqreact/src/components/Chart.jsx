import React, { useMemo } from 'react';
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Chart({ datiGrafico, periodSelected }) {

    const trasformedData = useMemo(() => {
        if (!datiGrafico || !datiGrafico.length) return [];
        return datiGrafico.map((entry) => {
            const timestamp = new Date(entry.timestamp * 1000);
            let formattedTime = "";
            if (periodSelected === "1h" || periodSelected === "24h") {
                const ora = timestamp.getHours().toString().padStart(2, '0');
                const minuti = timestamp.getMinutes().toString().padStart(2, '0');
                formattedTime = `${ora}:${minuti}`;
            } else if (periodSelected === "7d") {
                const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const dayIndex = timestamp.getDay();
                formattedTime = dayOfWeek[dayIndex];
            } else {
                const giorno = timestamp.getDate();
                const mese = timestamp.getMonth() + 1;
                const anno = timestamp.getFullYear();
                const data = `${giorno}/${mese}/${anno}`;
                formattedTime = data;
            }
            return {
                data: formattedTime,
                valore: Number(entry.price).toFixed(8),
            };
        });
    }, [datiGrafico, periodSelected]);

    return (
        <ResponsiveContainer width="100%" height={200}>
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
