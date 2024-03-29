import React from 'react';
//Componenti
import StockIcon from './StockIcon';
import { Container } from './Layout';

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

export default function Stock({ datiValuta, onSaveStocks, salvato }) {

    //Dati della valuta
    const nome = datiValuta.name;
    const simbolo = datiValuta.symbol;
    const immagine = datiValuta.iconUrl;
    const prezzo = Number(datiValuta.price).toFixed(2);

    return (
        <div className='w-full flex gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50'>
            <Container larghezza="w-min">
                <SaveButton onClick={onSaveStocks} salvato={salvato} />
            </Container>
            <Container larghezza="w-1/6">
                <StockIcon width="w-10" height="h-10" immagine={immagine} simbolo={simbolo} />
            </Container>
            <Container larghezza="w-2/6">
                <p>{simbolo}</p>
                <p className='text-sm text-gray-500'>{nome}</p>
            </Container>
            <Container larghezza="w-2/6" itemPosition="items-end">
                <p>{prezzo}<span className='text-sm text-gray-500'> $</span></p>
            </Container>
        </div>

    )
}
