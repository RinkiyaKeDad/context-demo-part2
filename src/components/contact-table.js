import React, { useContext, useState } from 'react';
import { ContactContext } from '../context/contact-context';

const ContactTable = () => {
  const [state, dispatch] = useContext(ContactContext);
  const [selectedId, setSelectedId] = useState();

  const rows = state.contacts.map(contact => (
    <tr onClick={() => setSelectedId(contact.id)}>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
    </tr>
  ));

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null);
  };

  const delContact = id => {
    dispatch({
      type: 'DEL_CONTACT',
      payload: id,
    });
  };

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mail</th>
        </tr>
        {rows}
      </table>
      <br />
      <button onClick={onRemoveUser}>Delete</button>
    </div>
  );
};

export default ContactTable;
