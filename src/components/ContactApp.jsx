import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

export default class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    // set data from contacts data
    this.state = {
      contacts: getData(),
    };

    /**
     * Binding delete handler with this method for import to all functions.
     */
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  // set state for handle delete contact
  onDeleteHandler(id) {
    // filter contact
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts }); // set contact after filtered.
  }

  render() {
    return (
      <div className='contact-app'>
        <h1 className='contact-app__title'>Contact List</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
