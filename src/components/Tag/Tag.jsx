import React from 'react';
import styles from './Tag.module.scss'
const Tag = ({ tags }) => {
    
    /* tags=["","",...tags à afficher] (tags est un tableau de tags à afficher*/

    //tableau de balise <p> contenant le tag
    const arrayOfTags = tags.map((value, index) => <div className={styles.tag} key={value}>{value}</div>)
    

    return  arrayOfTags
}

export default Tag;