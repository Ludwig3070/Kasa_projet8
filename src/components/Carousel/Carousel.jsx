import React, { useEffect } from 'react';
import Card from "../Card/Card"
import styles from "../../components/Carousel/Caroussel.module.scss"
import { useState } from 'react';

const Carousel = ({ pictures }) => {

    let [pictureNumber, setPictureNumber] = useState(0)
    const isMultiplePictures = pictures.length > 1;/* si il n y a qu'une image ou zero alors isMultilePictures=false, permet d'eviter d' afficher les chevrons si il n ya qu une seule image du logement */
    let data = { "cover": pictures[pictureNumber] }

    /* defilement automatique */
    /* chaque fois que picturesNumber   change le compteur est remis à 0 par useEffect grace a clearTimeout*/

    useEffect(()=>{
        const interval =  setInterval(() => {
            pictureNumber < (pictures.length - 1) ? setPictureNumber(pictureNumber + 1) : setPictureNumber(pictureNumber = 0)
    
            data = { "cover": pictures[pictureNumber] }
        }, "6000")
    
        return()=>clearInterval(interval)
        

    },[pictureNumber])




    /* gestion des clicks sur les chevrons */
    function handleLeftArrow() {
        pictureNumber === 0 ? setPictureNumber(pictureNumber = pictures.length - 1) : setPictureNumber(pictureNumber - 1)

    }
    function handleRightArrow() {
        pictureNumber < (pictures.length - 1) ? setPictureNumber(pictureNumber = pictureNumber + 1) : setPictureNumber(pictureNumber = 0)

    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_img}>
                <Card datas={data} />
            </div>
            <div onClick={handleLeftArrow} className={isMultiplePictures && (styles.carousel_leftArrow || "")}></div>
            <div onClick={handleRightArrow} className={isMultiplePictures && (styles.carousel_rightArrow || "")}></div>
            {/* console.log(pictureNumber) */}
        </div>
    );
};

export default Carousel;