import React, { useState} from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() { 
      const [Contacts, setContacts] = useState([]);
      const addConctactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, contact])
      };
  return (
    <div className="ui-container">
      <Header />
      <AddContact addConctactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  )
  
  };

 

export default App;
