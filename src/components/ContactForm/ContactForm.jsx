import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Contacts/contactSelectors';

import { addContactsThunk } from 'redux/Contacts/contactsThunk';
import s from './styles.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameChange = e => setName(e.target.value.trim());
  const numberChange = e => setNumber(e.target.value.trim());

  const handleSubmit = e => {
    e.preventDefault();

    const newContactItem = {
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in list`)
      : dispatch(addContactsThunk(newContactItem));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <div className={s.container}>
        <form onSubmit={handleSubmit}>
          <div className={s.formInput}>
            <h3 className={s.formTitle}>Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={nameChange}
              className={s.inpt}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              autoComplete="off"
              placeholder="Write name of person"
            />
          </div>
          <div className={s.formInput}>
            <h3 className={s.formTitle}>Number</h3>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={numberChange}
              className={s.inpt}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              autoComplete="off"
              placeholder="+38(000) 000-00-00"
            />
          </div>
          <div className={s.formBtn}>
            <button className={s.btn} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
