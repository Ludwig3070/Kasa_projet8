import React, { useEffect } from 'react';
import Card from "../Card/Card"
import styles from "../../components/Carousel/Caroussel.module.scss"
import { useState } from 'react';

const Carousel = ({ pictures }) => {

    let [pictureNumber, setPictureNumber] = useState(0)//etat avec un compteur pictureNumber
    const isMultiplePictures = pictures.length > 1;/* si il n y a qu'une image ou zero alors isMultilePictures=false, permet d'eviter d' afficher les chevrons si il n ya qu une seule image du logement */
    const [data, setData] = useState({ "cover": pictures[pictureNumber] });//data contient l'objet {"cover":"url de l'image correspondant à pictureNumber"}

    /* defilement automatique */
    /* chaque fois que picturesNumber change le compteur est remis à 0 par useEffect grace a clearInterval*/

    useEffect(()=>{
        const interval =  setInterval(() => {
            pictureNumber < (pictures.length - 1) ? setPictureNumber(pictureNumber + 1) : setPictureNumber(pictureNumber = 0)    
            
        }, "6000")/* ts les 6 secondes si pictureNumber est inferieur à sa valeur max on l'incremente sinon on le met à sa valeur min,puis en profite de modifier data.cover */
        
    
        return()=>clearInterval(interval)
        

    },[pictureNumber])/* des que picturNumber est modifié, c.a.d ts les 6 secondes ou lorsque l'on clique sur une fleche, le useEffect se declenche,l'image est raffraichit et clearInterval remet l'horloge à zero */    

    useEffect(()=>{
        setData ({ "cover": pictures[pictureNumber] })

    },[pictureNumber,pictures])//des que pictures est envoyé ou pictureNumber change,rechargement de la nouvelle data et rerender




    /* gestion des clicks sur les chevrons */
    function handleLeftArrow() {
        pictureNumber === 0 ? setPictureNumber(pictures.length - 1) : setPictureNumber(pictureNumber - 1)
        /* si on click sur leftArrow alors on decremente sauf si le compteur est à zero, là on y affecte la valeur max */
    }
    function handleRightArrow() {
        pictureNumber < (pictures.length - 1) ? setPictureNumber(pictureNumber + 1) : setPictureNumber(0)
        /* si on click sur rightArrow alors on incremente sauf si le compteur est au max, là on y affecte la valeur min "0" */
    }

  

    
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_card_container}>
                <Card datas={data} />
            </div>
            {/* affiche des chevrons ou non selon l'etat de isMultiplePictures */}
            <div onClick={handleLeftArrow} className={(isMultiplePictures && styles.carousel_leftArrow) || "undefined"}></div>
            <div onClick={handleRightArrow} className={(isMultiplePictures && styles.carousel_rightArrow) || "undefined"}></div>
            {/* Affiche le numéro de l'image actuellement affichée */}
            <div className={styles.carousel_counter}> {pictureNumber+1}/{pictures.length}</div>
        </div>
    );
};

export default Carousel;