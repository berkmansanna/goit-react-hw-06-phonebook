import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact-actions';
import styles from './ContactItem.module.css';

export const ContactItem = ({ contacts }) => {
  const { id, name, number } = contacts;
  const dispatch = useDispatch();
  return (
    <li className={styles.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button
        className={styles.btnDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
