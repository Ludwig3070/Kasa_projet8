import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Home.module.scss"
import coverBannerImg from '../../assets/Image source 1.png'
import Banner from '../../components/Banner/Banner';
import datas from '../../assets/datas.json'
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const accueil = true //pour Header
    const title1 = "Chez vous, partout et ailleurs"  //pour Banner
    /* const title2 = "partout et ailleurs" //pour Banner  */

    /* filtrage du fichier data.json pour envoyer un objet au composant Card à chaque iteration avec les elements attendus à savoir "title" (string),"id" (string), "cover" (url)*/

    const cards = datas.map((data, index) => (
        <Card key={index} datas={data} />

    ))


    return (

        <main className={styles.main} >
            <Header accueil={accueil} />
            <Banner argument={coverBannerImg} title1={title1}  />
            <div className={styles.container}>
                {cards}{/* Affichage des composants Card */}
            </div>

            <Footer />
        </main>
    );
};

export default Home;