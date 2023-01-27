import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/Contacts/contactSelectors';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/Contacts/contactsThunk';
import s from './styles.module.css';

import Filter from 'components/Filter/Filter';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterTerm = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterList = () => {
    const filter = filterTerm.toLowerCase().trim();
    return Array.isArray(contacts)
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : [];
  };

  const filteredContacts = filterList();

  return (
    <>
      <div className={s.container}>
        <Filter />
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <div key={id} className={s.contactList}>
              <div className={s.contactItem}>
                <span>{name}</span>
                <span>{number}</span>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContactsThunk(id));
                  }}
                  className={s.contactBtn}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
