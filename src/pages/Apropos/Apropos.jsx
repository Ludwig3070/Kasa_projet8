import React from 'react';
import Header from '../../components/Header/Header';
import styles from "./Apropos.module.scss"
const Apropos = () => {
    const argument = false  
    return (
        <main className={styles.main}>            
            <Header argument={argument}/>
        </main>
    );
};

export default Apropos;