import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={styles.header}>
        <img alt='Logo' src='https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png' />

        <div className={styles.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;
