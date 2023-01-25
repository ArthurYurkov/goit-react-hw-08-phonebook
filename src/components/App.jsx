import s from './styles.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.titleInput}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.titleBook}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
