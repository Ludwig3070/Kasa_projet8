import React from 'react';
import styles from "./Error404.module.scss"
import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'


const Error404 = () => {
    return (
        <main className={styles.main}>
            <Header />
            <h1 className={styles.Error404}>404</h1>
            <div className={styles.Error404_text}>
            <p >Oups! la page que </p>
            <p >vous demandez n'existe pas. </p>
            </div>
            
            <Link to={"/"} className={styles.Error404_link}>Retourner sur la page d'accueil</Link>
            <Footer />
        </main>
    );
};

export default Error404;