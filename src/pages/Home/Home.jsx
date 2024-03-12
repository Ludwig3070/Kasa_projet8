import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Home.module.scss"
import coverBannerImg from '../Home/../../assets/Image source 1.png'
import Banner from '../../components/Banner/Banner';
const Home = () => {
     const argument =true   
    
    return (
        
        <main className={styles.main} >            
            <Header argument={argument}/>
            <Banner argument={coverBannerImg}/>

        </main>
    );
};

export default Home;