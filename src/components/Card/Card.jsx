import React from 'react';
import stylesHome from './CardHomePage.module.scss'
import stylesLogement from './CardLogementPage.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* utilisation d'un dataset (data-id) sur l'image et le text pour pouvoir le recuperer par e.target.dataset.id */
/* utilisation du hook useNavigate */

const Card = ({ datas }) => {
    const navigate = useNavigate()
    const page = useLocation();//useLocation renvoi un objet avec l'url,sert pour savoir sur quel fichier scss s'orienter
    const [pathname, setPathname] = useState(null);
    const [style, setStyle] = useState(stylesHome);

    useEffect(() => {
        /* recupere le path soit "/" soit "/fichelogement/${id}" */
        if (page) {
            setPathname(page.pathname);
            /* console.log("page=",page.pathname)
            console.log("type de page=", typeof page.pathname) */
        }
        /*Nous utilisons setStyle pour mettre à jour le style en fonction du chemin de l'URL.  */
        if (page.pathname !== '/') {
            setStyle(stylesLogement);
        }
    }, [page]);
    // console.log("pathname=", pathname)
    // console.log("style=", style)




    return (
        /* style est soit stylesLogement soit stylesHome selon le parent,cela permet de selectionner le css correspondant */
        <div className={`${style.cards}`}>
            <div className={`${style.cards_card}`} onClick={() => datas.id && navigate(`/fichelogement/${datas.id}`)}>
                <img src={datas.cover} alt={datas.title || "photos_de_logement"} className={(datas.title && `${style.cards_card_img_withTextIn}`) || `${style.cards_card_img}`} data-id={datas.id} />
                {datas.title && <h2 className={`${style.cards_card_title}`} data-id={datas.id}>{datas.title}</h2>}
            </div>
        </div>
    );
};

export default Card;