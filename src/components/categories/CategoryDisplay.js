import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './Expenses';

class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div>
        <h2>{category.name} allowed {category.budget}</h2>
        <p>edit or delete a category</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button id="delbtn" name="delete" onClick={() => remove(category.key)}>🗑</button>  
        <Expenses categoryId = {category.key}/>   
      </div>
    );
  }
}

export default connect (
  null,
  { remove }
)(CategoryDisplay);