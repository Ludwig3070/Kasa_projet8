import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Apropos.module.scss"
import coverBanner2 from "../../assets/Image source 2.png"
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import CollapseBar from '../../components/CollapseBar/CollapseBar';
import datas from '../../assets/content.json'
const Apropos = () => {
    const apropos = true  //pour Header

    return (
        <main className={styles.main}>
            <Header apropos={apropos} />
            <Banner argument={coverBanner2} />
            <div className={styles.collapse_content}>
                {datas.map((data) => <CollapseBar content={data} key={data.id} />)}
            </div>
            <Footer />
        </main>
    );
};

export default Apropos;