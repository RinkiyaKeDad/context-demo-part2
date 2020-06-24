import React, { useReducer, createContext } from 'react';

export const ContactContext = createContext(); //we import this in other components to use the value we specified when we imported and used the provider component

const initialState = {
  contacts: [
    {
      id: '098',
      name: 'Diana Prince',
      email: 'diana@us.army.mil',
    },
    {
      id: '099',
      name: 'Bruce Wayne',
      email: 'bruce@batmail.com',
    },
    {
      id: '100',
      name: 'Clark Kent',
      email: 'clark@metropolitan.com',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'DEL_CONTACT':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
