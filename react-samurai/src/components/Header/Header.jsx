import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
        <img alt='Logo' src='https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png' />
    </header>;
}

export default Header;
