import React from 'react';
import styles from './Card.module.scss'
import { useNavigate } from 'react-router-dom';
/* utilisation d'un dataset (data-id) sur l'image et le text pour pouvoir le recuperer par e.target.dataset.id */
/* utilisation du hook useNavigate */

const Card = ({ datas,showTitle }) => {
    
    const navigate = useNavigate()    
    const li = datas.map((data) =>
        <li onClick={(e)=> navigate (`/fichelogement/${e.target.dataset.id}`)} key={data.id} className={styles.cards_card}>
            <img src={data.cover} alt={data.title} className={(showTitle&&styles.cards_card_img_withTextIn)||styles.cards_card_img} data-id={data.id} />
            {showTitle&&<h2 className={styles.cards_card_title} data-id={data.id}>{data.title} </h2>}
        </li>);

    return (
        <div className={styles.cards}>
            <ul>{li}</ul>
        </div>
    );
};

export default Card;