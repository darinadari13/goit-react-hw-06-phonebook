import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts') ?? '[]');
  });

  const [filter, setFilter] = useState('');



  useEffect (()=> {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])


  const addContact = newContact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts([newContact, ...contacts])
  };

  const deleteContact = id => {

    setContacts(contacts => contacts.filter(contact => contact.id !== id), )
  };

  const handleFilter = e => {
    setFilter(e.target.value);
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
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter onFilterChange={handleFilter} value={filter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          <span>'No contacts'</span>
        )}
      </div>
    );
  }
