import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts
        .map(p => <Post post={p.message} likesCount={p.likesCount} />);

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea>empty</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <br />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
