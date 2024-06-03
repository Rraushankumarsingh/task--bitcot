import React, { useState, useEffect } from 'react';
import './App.css';
import AddContactModal from './components/AddContactModal';
import EditContactModal from './components/EditContactModal';
import ViewContactModal from './components/ViewContactModal';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleEditContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setIsViewModalOpen(true);
  };

  const handleEditContactClick = (contact) => {
    setSelectedContact(contact);
    setIsEditModalOpen(true);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='maindev'>
      <div className='mainh1'>All Contacts</div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={() => setIsAddModalOpen(true)}>Add Contact</button>
      <ContactList 
        contacts={filteredContacts} 
        onView={handleViewContact} 
        onEdit={handleEditContactClick} 
        onDelete={handleDeleteContact} 
      />
      <div className='div-model-app'>
      <AddContactModal
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddContact} 
      />
      </div>
      
      <EditContactModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        contact={selectedContact} 
        onEdit={handleEditContact} 
      />
      <ViewContactModal 
        isOpen={isViewModalOpen} 
        onClose={() => setIsViewModalOpen(false)} 
        contact={selectedContact} 
      />
    </div>
  );
};

export default App;
