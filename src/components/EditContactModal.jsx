import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaUserCircle } from 'react-icons/fa';
import './Modal.css';

const EditContactModal = ({ isOpen, onClose, contact, onEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = () => {
    onEdit({ ...contact, name, email });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <h2>Edit Contact</h2>
      <div className="contact-header">
        <FaUserCircle size={40} />
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className='modalButton'> 
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onClose}>Reset</button>
      </div>
      
    </Modal>
  );
};

export default EditContactModal;
