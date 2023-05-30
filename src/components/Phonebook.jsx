import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactFormt from './ContactForm';
class Phonebook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      }));
    }
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //   createNewContact = () => {
  //     this.setState(prevState => ({
  //       contacts: [
  //         ...prevState.contacts,
  //         {
  //           id: nanoid(),
  //           name: this.state.name,
  //           number: this.state.number,
  //         },
  //       ],
  //     }));
  //   };
  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactFormt onSubmit={this.handleSubmit} />
        <h3>Contacts</h3>
        <Filter onInputChange={this.onInputChange} />
        {!this.state.filter ? (
          <ContactList contacts={this.state.contacts} />
        ) : (
          <ContactList contacts={this.filterContacts()} />
        )}
      </>
    );
  }
}
export default Phonebook;
