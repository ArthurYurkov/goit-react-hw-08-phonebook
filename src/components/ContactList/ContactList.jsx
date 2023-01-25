import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactSelectors';
import { deleteContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import s from './styles.module.css';

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
        {filteredContacts.map(({ name, number, id }) => {
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
