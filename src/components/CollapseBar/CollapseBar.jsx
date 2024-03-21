import stylesApropos from "./CollapseBarFromApropos.module.scss"
import stylesLogement from "./CollapseBarFromLogement.module.scss"
import React from 'react';
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const CollapseBar = ({ content }) => {

    const textArray = [...content.text]    
    //useLocation renvoi un objet avec l'url,sert pour savoir sur quel fichier scss s'orienter
    const page = useLocation();
    const [pathname, setPathname] = useState(null);
    const [style, setStyle] = useState(stylesLogement);

    useEffect(() => {
        /* recupere le path soit "/" soit "/fichelogement/${id}" */
        if (page) {
            setPathname(page.pathname);
            /* console.log("page=",page.pathname)
            console.log("type de page=", typeof page.pathname) */
        }
        /*Nous utilisons setStyle pour mettre à jour le style en fonction du chemin de l'URL.  */
        if (page.pathname === '/Apropos') {
            setStyle(stylesApropos);
        }
        console.log("pathname=", pathname)
        console.log("style=", style)
    }, [page]);
        

    return (
        <div className={`${style.collapse}`} >
            <input type="checkbox" name="collapse"  id={content.title} className={`${style.collapse_input}`}  />
            <label htmlFor={content.title}  className={`${style.collapse_label}`}>{content.title}</label>
            <div className={`${style.collapse_content}`} >
                {/* <p className={styles.collapse_content_p}>{content.text}</p> */}
                {textArray.map((text,index)=><p key={index} className={`${style.collapse_content_p}`}>{text}</p>)}
            </div>
        </div>
    );
};

export default CollapseBar;