import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.formItem}>
                <Field placeholder='Login' name={'login'} component={'input'}/>
            </div>
            <div className={s.formItem}>
                <Field placeholder='Password' name={'password'} component={'input'}/>
            </div>
            <div className={s.formItem}>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.checkAuthUserData(props.userId, formData.login, formData.password);
        formData.login = '';
        formData.password = '';
    }

    return (
        <div className={s.wrapper}>
            {props.resultCode
                ? <div className={s.warning}>Login or password is incorrect</div>
                : null
            }
            <LoginReduxForm onSubmit={onSubmit} />
        </div> 
    )   
}

export default Login;