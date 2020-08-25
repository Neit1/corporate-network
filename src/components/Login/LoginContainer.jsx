import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { checkAuthUserData } from './../../redux/authReducer';
import Login from './Login';
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
    render() {
        if (this.props.isAuth) return <Redirect to={'/work'} />
        else return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        resultCode: state.auth.resultCode
    }
}

export default connect(mapStateToProps, {checkAuthUserData})(LoginContainer);