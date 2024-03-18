import React from 'react';
import styles from '../Owner/Owner.module.scss'
const Owner = ({ host }) => {
    

    return (
        <div className={styles.owner}>
            <div className={styles.owner_name} >
                {host.name}
            </div>
            <img src={host.picture} alt="photo du proprietaire" className={styles.owner_picture} />
        </div>
    );
};

export default Owner;