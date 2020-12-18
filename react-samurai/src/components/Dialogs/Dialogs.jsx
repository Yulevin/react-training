import React from "react";
import styles from './Dialogs.module.css';
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs
        .map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);

    let messageElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
