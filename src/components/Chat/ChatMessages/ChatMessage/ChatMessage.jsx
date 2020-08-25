import React from 'react';
import s from './ChatMessage.module.css';

class ChatMessage extends React.Component {

    state = {
        editMode: false,
        message: this.props.message
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateMessage(this.props.messageId, this.state.message);
    }

    onMessageChange = (e) => {
        this.setState({
            message: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.message != this.props.message)
        this.setState({
            message: this.props.message
        });
    }

    render() {return (
        <div>
            <div>
                {this.props.nickname === this.props.usernickname
                    ? <span className={s.userNicknameStyle}>{this.props.nickname} </span> 
                    : <span className={s.nicknameStyle}>{this.props.nickname} </span> }
                writes:
            </div>
            <div className={s.message}>
                {!this.state.editMode
                    ? <span>{this.state.message}</span>
                    : <input className={s.editMessage} onChange={this.onMessageChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.message}/>
                }
            </div>
            {this.props.nickname === this.props.usernickname
                ? <div className={s.buttons}>
                    <button className={s.button} onClick={this.activateEditMode} disabled={this.state.editMode === true}>Edit message</button>
                    <button className={s.button} onClick={() => {this.props.deleteMessage(this.props.messageId)}}>Delete message</button>
                </div>
                : null}
        </div>
    )}
}

export default ChatMessage;