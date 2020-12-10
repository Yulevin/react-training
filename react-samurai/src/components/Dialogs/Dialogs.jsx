import React from "react";
import styles from './Dialogs.module.css';
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(d => <DialogItems name={d.name} id={d.id} />);

    let messageElements = props.state.messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;
