import React from 'react';
import { ContactContextProvider } from './context/contact-context';
import ContactTable from './components/contact-table';
import ContactAdd from './components/contact-add';

const App = () => {
  return (
    <ContactContextProvider>
      <ContactAdd />
      <ContactTable />
    </ContactContextProvider>
  );
};

export default App;
