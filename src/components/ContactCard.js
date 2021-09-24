import React from "react";

const ContactCard = (props) => {
  const{ id, name, email, phone } = props.contact

  return (
    <div className="item">
    <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
    <i className= "trash altenate outline icon"
    style={{color: "red", marginTop: "8px"}}></i>
     
  </div>
    
  );
};

export default ContactCard;