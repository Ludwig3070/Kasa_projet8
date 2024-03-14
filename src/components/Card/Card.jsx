import React from 'react';
import styles from './Card.module.scss'

function handleClick(e) {
    
    console.log(e.target)
}

const Card = ({ datas }) => {
    const li = datas.map((data) =>
        <li onClick={handleClick} key={data.id} className={styles.cards_card}>
            <img src={data.cover} alt={data.title} className={styles.cards_card_img}/>
            <h2 className={styles.cards_card_title}>{data.title}</h2>
        </li>);

    return (
        <div className={styles.cards}>
            <ul>{li}</ul>
        </div>
    );
};

export default Card;