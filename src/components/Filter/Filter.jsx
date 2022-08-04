
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contact-selector';
import { filterContacts } from 'redux/contact-actions';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.filterLabel}>
      <span>Find contacts by name</span>
      <input
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};
