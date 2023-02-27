
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { addContact, deleteContact, setFilter } from 'redux/contactsSlice';

export default function App() {
  const contacts = useSelector(state => state.contactsData.contacts);
 
  const filter = useSelector(state => state.contactsData.filter);

  const dispatch = useDispatch();



  const onAddContact = newContact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact))
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter onFilterChange={handleFilter} value={filter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <span>'No contacts'</span>
        )}
      </div>
    );
  }
