import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";

const AddContactModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onAdd({ id: Date.now(), name, email });
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div className="modal-content">
        <div className="additem">
          <h3>Add Contact</h3>
        </div>
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
        <div className="modal-buttons">
          <button onClick={handleSubmit} className="add-button">Add</button>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddContactModal;
