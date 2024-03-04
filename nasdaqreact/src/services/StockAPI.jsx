const apiKey = process.env.REACT_APP_API_KEY;
const options = {
    headers: {
        'x-access-token': apiKey,
    },
};

// Funzione generica per le chiamate API
const callAPI = (url) => {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error("Errore durante la richiesta API:", error.message);
            return [];
        });
};

// Chiamata all'API per la ricerca delle stock che coincidono con "searchString"
export const getStockSearch = ({ searchString }) => {
    const url = `https://api.coinranking.com/v2/search-suggestions?query=${searchString}`;
    return callAPI(url)
        .then(result => result.data.coins)
        .catch(error => []);
};

// Chiamata all'API per ricevere i valori dettagliati di una determinata "stock" definita tramite il suo "uuid"
export const getStockDetail = ({ uuid }) => {
    const url = `https://api.coinranking.com/v2/coin/${uuid}`;
    return callAPI(url)
        .then(result => result.data.coin)
        .catch(error => []);
};

// Chiamata all'API per ricevere i valori del prezzo nel tempo di una determinata "stock" definita tramite il suo "uuid"
export const getStockDataHistory = ({ uuid, periodSelected }) => {
    const periodo = periodSelected ? periodSelected : "1y";
    const url = `https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=${periodo}`;
    return callAPI(url)
        .then(result => result.data.history)
        .catch(error => []);
};
