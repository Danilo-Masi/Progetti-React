const apiKey = process.env.REACT_APP_API_KEY;

const options = {
    headers: {
        'x-access-token': apiKey,
    },
};

//Chiamata all'API per la ricerca delle stock che coincidono con "searchString" 
//valore inserito dall'utente
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

//Chiamata all'API per ricevere i valori dettagliati di una determinata 
//"stock" definita tramite il suo "uuid"
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

//Chiamata all'API per ricevere i valori del prezzo nel tempo di una determinata
//"stock" definita tramite il suo "uuid", "periodSelcted" definisce il periodo
//di tempo da cui iniziare a raccogliere i dati
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
