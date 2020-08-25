import React from 'react';
import WorkMessages from './WorkMessages';
import { connect } from 'react-redux';
import { setMessage, deleteMessage, updateMessage } from './../../../redux/workReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messages: state.workPage.messages,
        nickname: state.workPage.nickname
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setMessage, deleteMessage, updateMessage})
)(WorkMessages);