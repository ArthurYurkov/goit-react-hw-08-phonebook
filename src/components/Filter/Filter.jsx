import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/Contacts/contactSelectors';
import { filterContacts } from 'redux/Contacts/contactsSlice';
import s from './styles.module.css';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(filterContacts(e.target.value));
  return (
    <>
      <div className={s.filterContainer}>
        <label className={s.filterFocus}>
          <input
            type="text"
            name="filter"
            className={s.filterInput}
            value={filter}
            onChange={handleFilter}
            placeholder="Filter (name)"
          />
        </label>
      </div>
    </>
  );
}
