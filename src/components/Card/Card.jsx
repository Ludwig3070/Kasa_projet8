import React from 'react';
import styles from './Card.module.scss'

function handleClick(e){
    console.log(e.target.firstChild.firstChild.data)
    console.log(e.target.outerText)
    console.log(e.target.textContent)
    console.log(e.target)
}

const Card = ({datas}) => {
    const titles = datas.map((data)=>
        <li  onClick={handleClick} key={data.id} className={styles.cards_card}><h2 className={styles.cards_card_title}>{data.title}</h2></li>);
   
    return (
        <div className={styles.cards}>
            <ul>{titles}</ul>
        </div>
    );
};

export default Card;