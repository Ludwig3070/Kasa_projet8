import React from 'react';
import Logo from '../../assets/LOGO _footer.svg'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <img src={Logo} alt="logo de Kasa" className={styles.footer_img} />
                <div className={styles.footer_p_container}>
                    <p className={styles.footer_p}>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;