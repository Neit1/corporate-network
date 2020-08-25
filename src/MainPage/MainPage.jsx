import React from 'react';
import s from './MainPage.module.css';

const MainPage = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.welcome}>
                <p>Hello! Welcome to the corporate network!</p>
                <p>Please log in to start communication.</p>
            </div>
        </div>
    )
}

export default MainPage;