import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles}>
            <div>
                <div>{props.post}</div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
