import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Apropos.module.scss"
import coverBanner2 from "../../assets/Image source 2.png"
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import CollapseBar from '../../components/CollapseBar/CollapseBar';
import datas from '../../assets/content.json'
const Apropos = () => {
    const argument = false  //pour Header
 
    return (
        <main className={styles.main}>
            <Header argument={argument} />
            <Banner argument={coverBanner2} />
            {datas.map((data) => <CollapseBar content={data} key={data.id} />)}
            <Footer />
        </main>
    );
};

export default Apropos;