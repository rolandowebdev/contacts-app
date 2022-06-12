import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput';
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
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  // set state for handle delete contact
  onDeleteHandler(id) {
    // filter contact
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts }); // set contact after filtered.
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts, // untuk mempertahankan item yang sebelumnya berada di dalam array contacts
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: 'images/default.jpg',
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className='contact-app'>
        <h2 className='contact-app__title'>Add Contact</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2 className='contact-app__title'>Contact List</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
