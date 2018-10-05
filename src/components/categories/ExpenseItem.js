import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actionsExpenses';
import styles from './Expense.css';

class ExpenseItem extends Component {

static propTypes = {
  expense: PropTypes.object,
  onEdit: PropTypes.func,
  remove: PropTypes.func.isRequired
};

render() {
  const { expense, onEdit, remove } = this.props;

  return (
    <div className={styles.expense}>
      {expense.name} - {expense.price}
      <button name="edit" onClick={onEdit}>✎</button>
      <button id="delexp" name="delete" onClick={() => remove(expense)}>🗑</button>  
    </div>
  );
}
}

export default connect(
  null,
  { remove }
)(ExpenseItem);
