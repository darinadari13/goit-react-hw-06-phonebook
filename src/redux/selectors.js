export const selectContacts = (state) => state.contactsData.contacts;
export const selectFilter = (state) => state.contactsData.filter;
export const selectFilteredContacts = (state) => selectContacts(state).filter(contact =>
  contact.name.toLowerCase().includes(selectFilter(state).toLowerCase())
);