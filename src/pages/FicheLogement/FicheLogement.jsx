import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import styles from "./FicheLogement.module.scss"
import datas from '../../assets/datas.json'
import Carousel from '../../components/Carousel/Carousel';
import Score from '../../components/Score/Score';
import Owner from '../../components/Owner/Owner';



/* utilisation de useParams pour recuperer la l'id dans l'url */

const FicheLogement = () => {
    const params = useParams()/* component react pour recuperer des infos de l'url */
    /* console.log(params.id)  */ //id est dans params.id (provient de l'url)

    /* Tri du fichier json datas pour selectionner uniquement la "card" correspondante à params.id */
    const logement = datas.filter((item) => item.id.includes(params.id))
    { /*  logement est un TABLEAU contenant l'unique objet correspondant à l'id params.id  [{...}]*/
        /*logement[0] est un OBJET avec les donnees correspondant à l'ID params.id */
        /* maintenant il faut envoyer logement[0].pictures (TABLEAU) au composant Carousel qui va gerer un tableau d'URL*/
    }

    return (
        <main className={styles.main}>
            <Header />
            <Carousel pictures={logement[0].pictures} />{/* composant qui gere le carousel,reçoit en parametre un tableau d'url */}
            <div className={styles.description}>{/* Etape suivante on affiche du texte */}
                <h2 className={styles.description_h2}>{logement[0].title}</h2>
                <h3 className={styles.description_h3}>{logement[0].location}</h3>
            </div>
            <div className={styles.description_infos}>{/* Etape suivante on affiche les etoiles grace au component Score */}
                <div>
                    <Score activeStars={Number(logement[0].rating)} className={styles.description_infos_score} />{/* envoi d'un nombre d'etoiles à Score */}
                </div>
                <Owner host={logement[0].host} /> {/* Owner est le component qui gere le nom et la photo du proprietaire, {"name","picture"} */}
            </div>


        </main>
    );

}
export default FicheLogement;