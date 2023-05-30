import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <p>Find contact by name</p>
        <input
          style={{
            maxWidth: '500px',
          }}
          type="text"
          name="filter"
          onChange={this.props.onInputChange}
        />
      </>
    );
  }
}
export default Filter;
