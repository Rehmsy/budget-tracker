import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import ExpenseItem from './ExpenseItem';
import { updateExpense } from './actionsExpenses';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    updateExpense: PropTypes.func,
    categoryId: PropTypes.string
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = expense => {
    const { updateExpense } = this.props;
    updateExpense(expense);
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { expense, categoryId } = this.props;
    
    return (
      <li>
        {editing
          ? <ExpensesForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
            categoryId = {categoryId}  
          />
          : <ExpenseItem
            expense={expense}  
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        }
      </li>
    );
  }
}

export default connect(
  null,
  { updateExpense }
)(Expense);