/* eslint-disable jsx-a11y/img-redundant-alt */

import styles from "./Banner.module.scss"
import React from 'react';

function Banner({ argument, title1 }) {

    return (
        <div className={styles.banner}>
            <img src={argument} alt="photo sur la banniere de la page" className={styles.banner_img} />
            <div className={styles.banner_container}>
                <p className={styles.banner_container_title}> {title1}  </p>
            </div>
        </div>
    );
}

export default Banner; 
