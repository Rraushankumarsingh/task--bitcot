import React from 'react';
import Modal from 'react-modal';
import { FaUserCircle } from 'react-icons/fa';
import './Modal.css';

const ViewContactModal = ({ isOpen, onClose, contact }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
    <h2>Contact Details</h2>
    {contact ? (
      <>
        <div className="contact-header">
          <FaUserCircle size={40} />
          <div>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
          </div>
        </div>
      </>
    ) : (
      <p>No contact selected</p>
    )}
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default ViewContactModal;
