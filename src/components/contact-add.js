import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/contact-context';

const ContactAdd = () => {
  const [state, dispatch] = useContext(ContactContext);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: Math.floor(Math.random() * (150 - 102 + 1)) + 102,
        name: name,
        email: mail,
      },
    });
    setName('');
    setMail('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={name}
          id='name'
          onChange={e => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='text'
          value={mail}
          onChange={e => setMail(e.target.value)}
          id='email'
          placeholder='E-Mail'
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default ContactAdd;
