import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getStockSearch = ({ searchString }) => {
    
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchString}&apikey=${apiKey}`;

    return axios.get(url)
        .then(res => {
            const data = res.data.bestMatches;
            return data;
        })
        .catch(error => {
            console.log("ERRORE NEL CARICAMENTO DEI DATI", error);
            return [];
        });
}
