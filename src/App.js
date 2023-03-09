import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [liste, setListe] = useState([]);

  useEffect( () => {
      axios
        .get("https://127.0.0.1:8000/api/produits", {
          headers: {
            Accept: "application/json"
          }
        })
        .then ( (reponse) => {
          console.log(reponse)
          setListe(reponse.data)
        })
  }, [])

  return (
    <div className="App">
      liste des produits

      {
        liste.map( (pro, i) => (
          <div key={i}>
            {pro.libelle} - <b>{pro.prix}</b>
          </div>
        ))
      }
    </div>
  );
}

export default App;
