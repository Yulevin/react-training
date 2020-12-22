import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    alt='pic'
                    src='https://www.ee.ryerson.ca/css/images/header.png'
                />
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photo.large}
                    alt='ava'
                />
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
