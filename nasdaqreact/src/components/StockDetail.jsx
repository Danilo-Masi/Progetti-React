import React, { useEffect, useState } from 'react';
//Componenti
import Chart from './Chart';
import StockIcon from './StockIcon';
import SkeletonStockDetail from './SkeletonStockDetail';
import GroupButton from './GroupButton';
import { Container } from './Layout';
//Services
import { getStockDataHistory, getStockDetail } from '../services/StockAPI';

//Funzione che restituisce il bottone per eliminare una stock dalla lista delle stock salvate
function UnsavedButton({ onUnsaveStok }) {
    return (
        <button className="w-1/3 flex justify-end" onClick={onUnsaveStok}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
        </button>
    );
}

export default function StockDetail({ uuid, onUnsaveStok }) {

    const [datiGrafico, setDatiGrafico] = useState([]);
    const [datiValuta, setDatiValuta] = useState([]);
    const [loading, setLoading] = useState(false);
    const [periodSelected, setPeriodSelected] = useState("");

    //Caricamento dei dati della valuta e del grafico
    useEffect(() => {
        setLoading(true);
        Promise.all([getStockDetail({ uuid }), getStockDataHistory({ uuid, periodSelected })])
            .then(([detailData, historyData]) => {
                setDatiValuta(detailData);
                setDatiGrafico(historyData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Errore durante il caricamento dei dati", error);
                setLoading(false);
            });
    }, [uuid, periodSelected]);

    //Dati della valuta
    const nome = datiValuta.name || "ND";
    const simbolo = datiValuta.symbol || "ND";
    const immagine = datiValuta.iconUrl || "";
    const prezzo = Number(datiValuta.price).toFixed(8) || 0;
    const percentuale = datiValuta.change || "0";
    const isPositive = percentuale > 0;

    return (
        <>
            {loading === true ? (
                <SkeletonStockDetail />
            ) : (
                <div className='w-full md:w-[calc(33.33%-0.85rem)] h-auto flex flex-wrap gap-y-5 items-start justify-start rounded-md p-5 bg-gray-200'>
                    {/* Icona */}
                    <Container>
                        <StockIcon width="w-14" height="h-14" immagine={immagine} simbolo={simbolo} />
                    </Container>
                    {/* Simbolo e nome */}
                    <Container larghezza="w-2/4" itemPosition="items-start">
                        <h1 className='text-2xl'>{simbolo}</h1>
                        <p className='text-xl text-gray-500'>{nome}</p>
                    </Container>
                    {/* Bottone per un-salvare */}
                    <Container itemPosition="items-end" altezza="h-14">
                        <UnsavedButton onUnsaveStok={onUnsaveStok} />
                    </Container>
                    {/* Prezzo e percentuale */}
                    <Container larghezza="w-full" itemPosition="items-start">
                        <h1 className='text-2xl'>{prezzo} <span className='text-xl text-gray-500'>USD</span></h1>
                        <p className='text-md flex gap-1'>
                            <span>
                                {isPositive ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                )}
                            </span>
                            {percentuale}
                            <span>%</span>
                        </p>
                    </Container>
                    {/* Gruppo bottoni per selezionare il periodo */}
                    <GroupButton onPeriodSet={(period) => setPeriodSelected(period)} periodSelected={periodSelected} />
                    {/* Grafico prezzi */}
                    <Chart datiGrafico={datiGrafico} periodSelected={periodSelected} />
                </div>
            )}
        </>
    )
}
