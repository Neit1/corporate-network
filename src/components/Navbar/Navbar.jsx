import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/" exact activeClassName={s.activeLink}>Main Page</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/work" activeClassName={s.activeLink}>Work Discussion</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/chat" activeClassName={s.activeLink}>Chat</NavLink>
            </div>
            {!props.isAuth
                ? <div className={`${s.item} ${s.login}`}>
                    <NavLink to="/login" activeClassName={s.activeLink}>Log in</NavLink>
                </div>
                : <div className={`${s.item} ${s.login}`}>
                    <NavLink to="/" onClick={props.logOut}>Log out</NavLink>
                </div>
            }
        </nav>
    )
}

export default Navbar;