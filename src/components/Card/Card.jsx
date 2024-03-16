import React from 'react';
import styles from './Card.module.scss'
import { useNavigate } from 'react-router-dom';
/* utilisation d'un dataset (data-id) sur l'image et le text pour pouvoir le recuperer par e.target.dataset.id */
/* utilisation du hook useNavigate */

const Card = ({ datas }) => {
    const navigate = useNavigate();

    // On accède directement aux propriétés de datas
    return (
        <div className={styles.cards}>
            <div className={styles.cards_card} onClick={() => datas.id && navigate(`/fichelogement/${datas.id}`)}>
                <img src={datas.cover} alt={datas.title||"photos_de_logement"} className={(datas.title && styles.cards_card_img_withTextIn) || styles.cards_card_img} data-id={datas.id} />
                {datas.title && <h2 className={styles.cards_card_title} data-id={datas.id}>{datas.title}</h2>}
            </div>
        </div>
    );
};

export default Card;