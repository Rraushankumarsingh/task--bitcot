import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onView, onEdit, onDelete }) => (
  <div>
    {contacts.length === 0 ? (
      <p>Contact List is empty</p>
    ) : (
      contacts.map(contact => (
        <ContactCard 
          key={contact.id} 
          contact={contact} 
          onView={onView} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))
    )}
  </div>
);

export default ContactList;
