import React from 'react';
import Header from '../../components/Header/Header';
import { useParams,useNavigate } from 'react-router-dom';
import styles from "./FicheLogement.module.scss"
import datas from '../../assets/datas.json'
import Carousel from '../../components/Carousel/Carousel';
import Score from '../../components/Score/Score';
import Owner from '../../components/Owner/Owner';
import Tag from '../../components/Tag/Tag';
import CollapseBar from '../../components/CollapseBar/CollapseBar';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';


/* utilisation de useParams pour recuperer la l'id dans l'url */

const FicheLogement = () => {
    const params = useParams()/* component react pour recuperer des infos de l'url */
    /* console.log(params.id)  */ //id est dans params.id (provient de l'url)  
    /* Tri du fichier json datas pour selectionner uniquement la "card" correspondante à params.id */
    const logement = datas.filter((item) => item.id.includes(params.id))
     /*  logement est un TABLEAU contenant l'unique objet correspondant à l'id params.id  [{...}]*/
        /*logement[0] est un OBJET avec les donnees correspondant à l'ID params.id */
        /* maintenant il faut envoyer logement[0].pictures (TABLEAU) au composant Carousel qui va gerer un tableau d'URL*/
    const navigate = useNavigate(); // Utilisez useNavigate dans le composant fonctionnel
     // Vérifiez si logement est vide et redirigez vers "/" si c'est le cas
   
     useEffect(() => {
        if (logement.length === 0) {
            navigate("*");
        }
    }, [logement, navigate]);

    if (logement.length === 0) {
        return null; // ou afficher un message d'erreur, etc.,evite le Uncaught TypeError: logement[0] is undefined
    }

     
    /* gestion des collapses, CollapseBar attend un objet 
    {
        "id":"",
        "title":"",
        "text":["","",...,""]
    } */

    
    /* donnees à transmettre à CollapseBar */
    const description = {"id":logement[0].id,"title":"Description","text":[logement[0].description]}

    const equipements = {"id":logement[0].id,"title":"Équipements","text":logement[0].equipments}
    
    
    return (
        <main className={styles.main}>
            <Header />
            <Carousel pictures={logement[0].pictures} />{/* composant qui gere le carousel,reçoit en parametre un tableau d'url */}
            <div className={styles.description}>{/* Etape suivante on affiche du texte */}
                <h2 className={styles.description_h2}>{logement[0].title}</h2>
                <h3 className={styles.description_h3}>{logement[0].location}</h3>
            </div>
            <div className={styles.description_tags}>{/* Etape suivante on affiche les tags grace au component Tag */}
                <Tag className={styles.allo} tags={logement[0].tags} />
            </div>

            <div className={styles.description_infos}>
                <div>{/* Etape suivante on affiche les etoiles grace au component Score */}
                    <Score activeStars={Number(logement[0].rating)} className={styles.description_infos_score} />{/* envoi d'un nombre d'etoiles à Score */}
                </div>
                <Owner host={logement[0].host} /> {/* Owner est le component qui gere le nom et la photo du proprietaire, {"name","picture"} */}
            </div>
            <CollapseBar content={description}  />
            <CollapseBar content={equipements}  />
            <Footer />


        </main>
    );

}
export default FicheLogement;