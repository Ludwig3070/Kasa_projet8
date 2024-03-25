import React from 'react';
import stylesHome from './CardHomePage.module.scss'
import stylesLogement from './CardLogementPage.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import alternativeImg from '../../assets/remplacement.png';

const Card = ({ datas }) => {
    const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation
    const page = useLocation(); // useLocation renvoie un objet contenant l'URL de la page
    // eslint-disable-next-line
    const [pathname, setPathname] = useState(null); // État pour stocker le chemin de l'URL
    const [style, setStyle] = useState(stylesHome); // État pour stocker le style, par défaut stylesHome
    /* style est un objet JavaScript contenant les classes CSS à appliquer, soit stylesLogement soit stylesHome selon le parent, cela permet de sélectionner le CSS correspondant */
    const [imageLoaded, setImageLoaded] = useState(false);//Etat pour verifier que l'image soit bien chargée

    useEffect(() => {
        if (page.pathname !== '/') {//si l'url n'est pas '/'...
            setStyle(stylesLogement);
        } else {
            setStyle(stylesHome);
        }
    }, [page]);


    useEffect(() => {
        const image = new Image();
        image.src = datas.cover;
    
        // Fonction pour gérer le chargement de l'image
        const handleImageLoad = () => {
            setImageLoaded(true);
        };
    
        // Fonction pour gérer l'erreur de chargement de l'image
        const handleImageError = () => {
            setImageLoaded(false);
        };
    
        // Ajouter des écouteurs d'événements pour charger et erreur d'image
        image.onload = handleImageLoad;
        image.onerror = handleImageError;
    
        // Nettoyer les écouteurs d'événements lors du démontage du composant
        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [datas.cover]);
    
    return (

        <div className={`${style.cards}`}>{/* La classe CSS 'style.cards_card' est déterminée par 'style', qui est soit stylesLogement soit stylesHome */}
            <div className={`${style.cards_card}`} onClick={() => datas.id && navigate(`/fichelogement/${datas.id}`)}>{/* Si datas.id existe, on ajoute un événement de clic pour naviguer vers '/fichelogement/${datas.id}' */}
                <img
                    src={imageLoaded ? datas.cover : alternativeImg}//affiche l'image alternative en cas d'erreur de chargement de l'image
                    alt={datas.title || "photos_de_logement"}
                    className={(datas.title && `${style.cards_card_img_withTextIn}`) || `${style.cards_card_img}`}

                />
                {/* Si datas.title existe, on affiche un titre */}
                {datas.title && <h2 className={`${style.cards_card_title}`}>{datas.title}</h2>}
            </div>
        </div>
    );
};

export default Card;
