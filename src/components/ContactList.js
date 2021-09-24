import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
      return (
           <contactcard contact={contact}></contactcard>
      );

  })

return <div className="ui celled list">
  renderContactList
</div>;
};
export default ContactList;