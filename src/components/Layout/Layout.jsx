import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectUser } from 'redux/Auth/authSelectors';
import { getLogOutThunk } from 'redux/Auth/authThunk';
import styles from './styles.module.css';

export default function Layout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.headerNav}>
        {user ? (
          <nav className={styles.navigationLeft}>
            <div className={styles.navDiv}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeNav : styles.navItem
                }
                to="home"
              >
                {' '}
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeNav : styles.navItem
                }
                to="contacts"
              >
                {' '}
                Contacts
              </NavLink>
            </div>
            <div className={styles.logOut}>
              <p>Hello, {user.name}</p>
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
