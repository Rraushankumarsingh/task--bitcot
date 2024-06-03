import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const ContactCard = ({ contact, onView, onEdit, onDelete }) => (
  <div className="contact-card">
    <div className="contact-header">
      <FaUserCircle size={40} />
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
      </div>
      <button onClick={() => onView(contact)}><FaEye /></button>
      <button onClick={() => onEdit(contact)}><FaEdit /></button>
      <button onClick={() => onDelete(contact.id)}><FaTrash /></button>
    </div>
    <div className="contact-actions">
      
    </div>
  </div>
);

export default ContactCard;
