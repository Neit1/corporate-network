import React from 'react';
import ChatMessages from './ChatMessages';
import { connect } from 'react-redux';
import { setMessage, deleteMessage, updateMessage } from '../../../redux/chatReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages,
        nickname: state.chatPage.nickname
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setMessage, deleteMessage, updateMessage})
)(ChatMessages);