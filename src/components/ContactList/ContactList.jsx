import React from 'react';
import Contact from '../Contact/Contact';
import css from'./ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={css.listWrapper}>
      {contacts.length > 0 ? (
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
}

export default ContactList;
