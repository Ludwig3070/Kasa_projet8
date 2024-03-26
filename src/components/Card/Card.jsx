import React from 'react';
import stylesHome from './CardHomePage.module.scss'
import stylesLogement from './CardLogementPage.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import alternativeImg from '../../assets/remplacement.png';

const Card = ({ datas }) => {
    const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation


    /* useEffect numero 1, gere le style à appliquer selon le parent */

    const page = useLocation(); // useLocation renvoie un objet contenant l'URL de la page
    // eslint-disable-next-line
    const [pathname, setPathname] = useState(null); // État pour stocker le chemin de l'URL
    const [style, setStyle] = useState(stylesHome); // État pour stocker le style, par défaut stylesHome
    /* style est un objet JavaScript contenant les classes CSS à appliquer, soit stylesLogement soit stylesHome selon le parent, cela permet de sélectionner le CSS correspondant */
    useEffect(() => {
        if (page.pathname !== '/') {//si l'url n'est pas '/'...
            setStyle(stylesLogement);
        } else {
            setStyle(stylesHome);
        }
    }, [page]);



    /* useEffect numero 2, gere l'image à afficher en cas d'erreur d'url ou de reception d'image */

    const [imageLoaded, setImageLoaded] = useState(false);//Etat pour verifier que l'image soit bien chargée
    useEffect(() => {
        const image = new Image();
        image.src = datas?.cover;

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
        image.width ? handleImageLoad() : handleImageError()
        // Nettoyer les écouteurs d'événements lors du démontage du composant
        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [datas.cover, imageLoaded]);

    /* useEffect numero 3, gere l'image à afficher à partir d'ecran superieur à 767px pour stylesHome uniquement */

    useEffect(() => {
        const image = new Image();
        image.src = datas.cover;
        let displayAlernativeImg = ((style === stylesLogement) && (window.innerWidth > 760) && (image.width < (window.innerWidth - 90))) && (image.width < 1240)
        console.log("largeur d image=", image.width);
        if (displayAlernativeImg) {
            console.log(displayAlernativeImg);
            console.log("largeur de fenetre=", window.innerWidth);
            setImageLoaded(false)
        }
    }, [datas.cover, imageLoaded])

    /* useEffect numero 4, gere l'apparition de card */

    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => { 
        const timeout = setTimeout(() => {            
            setIsVisible(true);
          }, 10); // Délai de 10ms avant d'afficher l'élément      
          return () => {
            setIsVisible(false); // Réinitialiser isVisible lorsque le composant est démonté
            clearTimeout(timeout); // Nettoyer le timeout lors du démontage du composant 
          }
    
    }, [datas])//rendu quand datas change
   



return (
    <div className={`${style.cards} ${isVisible ? style.cards_fadeIn: style.cards_fadeOut}`}>{/* La classe CSS 'style.cards_card' est déterminée par 'style', qui est soit stylesLogement soit stylesHome */}
        <div className={`${style.cards_card} `} onClick={() => datas.id && navigate(`/fichelogement/${datas.id}`)}>{/* Si datas.id existe, on ajoute un événement de clic pour naviguer vers '/fichelogement/${datas.id}' */}
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
