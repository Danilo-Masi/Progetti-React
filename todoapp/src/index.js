import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactModal from 'react-modal';
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//CSS
import "./style.css";


const rootId = "root";

//Proprietà per cambiare lo stile del Modal
//ReactModal.setAppElement(`#${rootId}`);
//ReactModal.defaultStyles.content.background = "none";
//ReactModal.defaultStyles.content.border = "none";

const root = ReactDOM.createRoot(document.getElementById(rootId));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

