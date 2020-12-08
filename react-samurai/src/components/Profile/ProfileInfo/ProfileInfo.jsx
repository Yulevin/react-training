import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    alt='pic'
                    // src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1'
                    src='https://www.ee.ryerson.ca/css/images/header.png'
                />
            </div>
            <div className={styles.descriptionBlock}>
                <img
                    alt='ava'
                    // src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1'
                />
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
