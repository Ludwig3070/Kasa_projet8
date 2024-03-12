/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./Banner.module.scss"


import React from 'react';

function Banner({ coverBannerImg }) {
    return (
        <div>
            <div className={styles.backGround}></div>
            
            <img src={coverBannerImg} alt="paysage" className={styles.img} />
        </div>
    );
}

export default Banner;