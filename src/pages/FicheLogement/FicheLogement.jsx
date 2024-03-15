import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';



/* utilisation de useParams pour recuperer la l'id dans l'url */

const FicheLogement = () => {
    const params= useParams()
    console.log (params.id)
    return (
        <div>
            <h1>LOGEMENT</h1>
            <Header/>
        </div>
    );
};

export default FicheLogement;