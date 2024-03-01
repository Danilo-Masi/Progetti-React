const apiKey = process.env.REACT_APP_API_KEY;

const options = {
    headers: {
        'x-access-token': apiKey,
    },
};

//Funzione che fa una chiamata all'API per richiedere le stock che coincidono con la stringa inserita dall'utente
export const getStockSearch = ({ searchString }) => {
    return fetch(`https://api.coinranking.com/v2/search-suggestions?query=${searchString}`, options)
        .then((response) =>
            response.json()
        )
        .then((result) => {
            return result.data.coins;
        })
        .catch((error) => {
            console.error("Errore durante la richiesta API:", error.message);
            return []
        });
}

export const getStockDetail = ({ uuid }) => {
    return fetch(`https://api.coinranking.com/v2/coin/${uuid}`, options)
        .then((response) =>
            response.json()
        )
        .then((result) => {
            return result.data.coin;
        })
        .catch((error) => {
            console.error("Errore durante la richiesta API:", error.message);
            return [];
        });
}

//Funzione che fa una chiamata all'API per richiedere le mutazioni del valore nel tempo di una determinata stock
export const getStockDataHistory = ({ uuid, periodSelected }) => {

    const periodo = periodSelected ? periodSelected : "1y";

    return fetch(`https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=${periodo}`, options)
        .then((response) =>
            response.json()
        )
        .then((result) => {
            return result.data.history;
        })
        .catch((error) => {
            console.error("Errore durante la richiesta API:", error.message);
            return [];
        });
}
