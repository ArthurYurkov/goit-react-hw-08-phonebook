import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectName, selectToken } from 'redux/Auth/authSelectors';
import { getLogOutThunk } from 'redux/Auth/authThunk';
import styles from './styles.module.css';

export default function Layout() {
  const token = useSelector(selectToken);
  // const name = useSelector(selectName);
  const dispatch = useDispatch();
  console.log(token);
  return (
    <>
      <header className={styles.headerNav}>
        {token ? (
          <nav className={styles.navigationLeft}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNav : styles.navItem
              }
              to="login"
            >
              {' '}
              Contacts
            </NavLink>
            <div className={styles.logOut}>
              <p>Hello, mango@mail.com</p>
              <button
                className={styles.logOutBtn}
                onClick={() => dispatch(getLogOutThunk())}
              >
                Logout
              </button>
            </div>
          </nav>
        ) : (
          <nav className={styles.navigationRight}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNav : styles.navItem
              }
              to="login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNav : styles.navItem
              }
              to="register"
            >
              Registration
            </NavLink>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
