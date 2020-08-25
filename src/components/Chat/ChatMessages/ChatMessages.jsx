import React from 'react';
import ChatMessage from './ChatMessage/ChatMessage';
import s from './ChatMessages.module.css';
import { Field, reduxForm } from 'redux-form';

const ChatMessagesForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field className={s.textarea} placeholder='Enter your message' name={'addMessageTextarea'} component={'textarea'} />
            </div>
            <div>
                <button className={s.button}>Send message</button>
            </div>
        </form>
    )
}

const ChatMessagesReduxForm = reduxForm({
    form: 'addChatMessage'
})(ChatMessagesForm);

const ChatMessages = (props) => {

    let messagesElements = props.messages.map(m => <ChatMessage usernickname={props.nickname} nickname={m.nickname} message={m.message} key={m.id}
    messageId={m.id} deleteMessage={props.deleteMessage} updateMessage={props.updateMessage} />);

    const onSubmit = (data) => {
        props.setMessage(data.addMessageTextarea);
        data.addMessageTextarea = '';
    }

    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <ChatMessagesReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default ChatMessages;