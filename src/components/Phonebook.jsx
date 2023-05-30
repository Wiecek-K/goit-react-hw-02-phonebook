import React, { Component } from 'react';
import { nanoid } from 'nanoid';

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
    console.log(name);
    this.createNewContact();
  };
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state[e.target.name]);
  };
  createNewContact = () => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
    }));
  };
  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  onFilterChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.filterContacts();
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form
          style={{
            border: '1px solid black',
            maxWidth: '500px',
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={this.handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Nr
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              defaultValue={'227-91-26'}
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h3>Contacts</h3>
        <input type="text" name="filter" onChange={this.onInputChange} />
        {!this.state.filter ? (
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>{`${name}:   ${number}`}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {this.filterContacts().map(({ id, name, number }) => (
              <li key={id}>{`${name}:   ${number}`}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default Phonebook;
