import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Home.module.scss"
import coverBannerImg from '../../assets/Image source 1.png'
import Banner from '../../components/Banner/Banner';
import datas from '../../assets/datas.json'
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    const argument = true //pour Header
    const title1 = "Chez vous,"  //pour Banner
    const title2 = "partout et ailleurs" //pour Banner 

    return (

        <main className={styles.main} >
            <Header argument={argument} />
            <Banner argument={coverBannerImg} title1={title1} title2={title2} />
            <Card datas={datas} />
            <Footer />
        </main>
    );
};

export default Home;