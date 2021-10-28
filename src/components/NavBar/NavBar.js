import React from "react";
import { NavLink } from "react-router-dom";
import { NavList, NavItem, Panel } from './NavBar.styles';
import * as styles from './NavBar.styles.css';
import UserMenu from '../UserMenu';
import { unsetError } from '../../redux/auth/auth-slice';
import { useDispatch } from "react-redux";

export default function NavBar({isLoggedId}) {
    const dispatch = useDispatch();
    const onLinkClick = () => {
        dispatch(unsetError());
    };

    return (
        <Panel>
            <NavList>
                {isLoggedId ? (
                    <UserMenu />
                ) : (
                <>
                    <NavItem>
                        <NavLink
                            className={styles.navLinkStyle}
                            activeClassName={styles.activeStyle}
                            exact
                            to='/login'
                            onClick={() => onLinkClick()}
                        >
                           Авторизоваться
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={styles.navLinkStyle}
                            activeClassName={styles.activeStyle}
                            exact
                            to='/register'
                            onClick={() => onLinkClick()}
                        >
                        Зарегистрируйтесь
                        </NavLink>
                    </NavItem>
                </>
                )}
            </NavList>
        </Panel>
    );
}