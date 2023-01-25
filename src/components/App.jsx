import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import s from './styles.module.css';
import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>

        {/* <h1 className={s.titleInput}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.titleBook}>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </div>
    </>
  );
};
