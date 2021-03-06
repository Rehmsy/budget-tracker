import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getError } from './reducers';
import { clearError } from './actions';

export class Error extends Component {
  static propTypes = {
    error: PropTypes.any,
    clearError: PropTypes.func
  };

  componentDidUpdate() {
    const { error, clearError } = this.props;

    if(error) {
      setTimeout(() => {
        clearError();
      }, 10000);
    }
  }
  render() {
    const { error } = this.props;
    if(!error) return null;

    return (
      <pre>{error}</pre>
    );
  }
}

export default connect(
  state => ({
    error: getError(state)
  }),
  { clearError }
)(Error);