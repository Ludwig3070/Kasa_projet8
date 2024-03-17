import styles from "./CollapseBar.module.scss"
import React from 'react';

const CollapseBar = ({ content }) => {

    return (
        <div className={styles.collapse} >
            <input type="checkbox" name="collapse"  id={content.title} className={styles.collapse_input}  />
            <label htmlFor={content.title} className={styles.collapse_label}>{content.title}</label>
            <div className={styles.collapse_content} >
                <p className={styles.collapse_content_p}>{content.text}</p>
            </div>
        </div>
    );
};

export default CollapseBar;