import React from 'react';
import ChatMessagesContainer from './ChatMessages/ChatMessagesContainer';
import s from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={s.wrapper}>
            <ChatMessagesContainer />
        </div>
    )
}

export default Chat;