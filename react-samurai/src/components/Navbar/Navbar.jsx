import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <li><NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink></li>
            <li><NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink></li>
            <li><NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink></li>
            <li><NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink></li>
            <li><NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink></li>
        </nav>
    );
}

export default Navbar;
