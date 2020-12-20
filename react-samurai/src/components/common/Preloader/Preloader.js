import React from "react";
import styles from "../../Users/users.module.css";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = (props) => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;
