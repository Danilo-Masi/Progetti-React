import React, { useEffect, useState } from 'react';
//Componenti
import StockIcon from './StockIcon';
import { getStockDetail } from '../services/StockAPI';

//Funzione che restituisce il bottone per salvare una stock nella lista
function SaveButton({ onClick, salvato }) {
    return (
        <button onClick={onClick}>
            {salvato ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )}
        </button>
    );
}

export default function Stock({ uuid, onSaveStocks, salvato }) {

    const [datiValuta, setDatiValuta] = useState({});

    /********** DA IMPLEMENTARE ************/
    useEffect(() => {
        Promise.all([getStockDetail({ uuid })])
            .then(([detailStock]) => {
                setDatiValuta(detailStock);
            })
            .catch(error => {
                console.error("Errore durante il caricamento dei dati", error);
            });
    }, [uuid]);

    //Dati della valuta
    const nome = datiValuta.name;
    const simbolo = datiValuta.symbol;
    const immagine = datiValuta.iconUrl;
    const prezzo = Number(datiValuta.price).toFixed(8);
    const percentuale = datiValuta.change;

    //Stile
    const divClass = "flex items-center gap-2";
    const valueText = "text-md";

    return (
        <div className='w-full flex item-center justify-between p-3 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50'>
            <div className={divClass}>
                {/* Bottone salvataggio */}
                <SaveButton onClick={onSaveStocks} salvato={salvato} />
                {/* Icona stock */}
                <StockIcon width="w-10" height="h-10" immagine={immagine} simbolo={simbolo} />
                {/* Nome e simbolo stock */}
                <p className={valueText}>
                    {nome ? nome : "ND"}
                    <br />
                    <span className="text-xs text-gray-700">
                        {simbolo ? simbolo : "ND"}
                    </span>
                </p>
            </div>
            {/* Prezzo e percentuale stock */}
            <div className={divClass}>
                <p className={valueText}>
                    $ {prezzo ? prezzo : "ND"}
                    <br />
                    <span className="text-xs text-gray-700 float-right">
                        {percentuale ? percentuale : "ND"}%
                    </span>
                </p>
            </div>
        </div>
    )
}
