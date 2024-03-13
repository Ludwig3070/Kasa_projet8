import React from 'react';
import Logo from '../../assets/LOGO _footer.svg'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <img src={Logo} alt="logo de Kasa" className={styles.footer_img} />
                <p className={styles.footer_p}>© 2020 Kasa.All</p>
                <p className={styles.footer_p}>rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;