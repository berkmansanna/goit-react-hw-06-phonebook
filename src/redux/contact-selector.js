export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filtredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
