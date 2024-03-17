/* eslint-disable no-mixed-operators */
/* ce composant est le header du site internet utilisé dans toutes les pages */

import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import styles from "./Header.module.scss"

const Header = ({accueil,apropos}) => {
    /* pour /:si agument=true =>underlined(styles.header_nav_link_underlined) sinon(||) styles.header_nav_link  */
    /* pour /Apropos:si !agument=true =>underlined(styles.header_nav_link_underlined) sinon(||) styles.header_nav_link  */
    return (
        <div className={styles.header}>
            <img src={Logo} alt="Logo de Kasa" className={styles.header_logo}/>
            <nav className={styles.header_nav}>
                <Link to="/" className={accueil&&styles.header_nav_link_underlined||styles.header_nav_link} >Accueil</Link>
                <Link to="/Apropos" className={apropos&&styles.header_nav_link_underlined||styles.header_nav_link}>A propos</Link>
            </nav>
        </div>
    );



};

export default Header;