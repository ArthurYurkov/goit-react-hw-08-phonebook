import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import s from './styles.module.css';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivatRoute/PrivatRoute';

const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/home"
                    component={<Registration />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/home" component={<Login />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute redirectTo="/login" component={<HomePage />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
