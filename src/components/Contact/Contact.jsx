import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css'

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
         <div className={css.wrapper}>
        <div className={css.item}>
            <p>{contact.name}
            </p>
            <p>{contact.number}
            </p>

        </div>
        <button className={css.dBtn} onClick={handleDelete}>Delete</button>
    </div>
    </li>
  );
}

export default Contact;

