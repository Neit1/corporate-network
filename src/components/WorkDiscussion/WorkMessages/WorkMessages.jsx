import React from 'react';
import WorkMessage from './WorkMessage/WorkMessage';
import s from './WorkMessages.module.css';
import { Field, reduxForm } from 'redux-form';

const WorkMessagesForm = (props) => {

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

const WorkMessagesReduxForm = reduxForm({
    form: 'addWorkMessage'
})(WorkMessagesForm);

const WorkMessages = (props) => {

    let messagesElements = props.messages.map(m => <WorkMessage usernickname={props.nickname} nickname={m.nickname} message={m.message} key={m.id}
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
            <WorkMessagesReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default WorkMessages;