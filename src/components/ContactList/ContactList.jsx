import { useSelector } from 'react-redux';

import { filtredContacts } from 'redux/contact-selector';
import { ContactItem } from './ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(filtredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contacts={{ id, name, number }}
        />
      ))}
    </ul>
  );
};

