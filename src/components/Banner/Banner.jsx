/* eslint-disable jsx-a11y/img-redundant-alt */

import styles from "./Banner.module.scss"


import React from 'react';

function Banner({ argument,title1,title2  }) {

    return (
        <div className={styles.banner}>
            <img src={argument} alt="photo de paysage" className={styles.banner_img} />
            <div className={styles.banner_container}>
                <h1 className={styles.banner_container_h1}> {title1} </h1>
                <h1 className={styles.banner_container_h1}> {title2 }</h1>
            </div>
        </div>


    );
}

export default Banner;