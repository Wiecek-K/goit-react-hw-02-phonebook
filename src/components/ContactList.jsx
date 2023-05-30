import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>{`${name}:   ${number}`}</li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
