import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import s from './styles.module.css';

export default function Contacts() {
  return (
    <>
      <div className={s.container}>
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
}
