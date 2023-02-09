import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import s from './styles.module.css';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';

import { getCurrentUserThunk } from 'redux/Auth/authThunk';

const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <div className={s.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<Registration />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/" component={<Login />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
