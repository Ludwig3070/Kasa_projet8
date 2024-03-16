import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import styles from "./FicheLogement.module.scss"
import datas from '../../assets/datas.json'
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';






/* utilisation de useParams pour recuperer la l'id dans l'url */

const FicheLogement = () => {
    const params = useParams()
    /* console.log(params.id)  */ //id est dans params.id (provient de l'url)

    /* Tri du fichier json datas pour selectionner uniquement la "card" correspondante à params.id */
    const logement= datas.filter((item)=>item.id.includes(params.id)) //logement est un tableau contenant l'unique objet correspondant à l'id params.id  [{...}]
    //logement[0] est un objet avec les donnees correspondant à l'ID params.id

    /* maintenant il faut envoyer logement[0].pictures à un composant Carousel qui va gerer un tableau d'URL*/

    return (
        <main className={styles.main}>
            <Header />
            <Carousel pictures={logement[0].pictures} />
                    
                       
        </main>
    );
};

export default FicheLogement;