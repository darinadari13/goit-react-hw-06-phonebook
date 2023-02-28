import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(selectContacts);
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <span>'No contacts'</span>
        )}
      </div>
    );
}
