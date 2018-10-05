import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { addExpense } from './actionsExpenses';
import { getExpensesByCategoryId } from './reducersExpenses';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <ul>
        <section>
          <h3>Add an expense:</h3>
          <ExpensesForm
            onComplete={this.handleAddExpense}
          />
        </section>
        
        <section>
          {expenses.map(expense => {
            return <Expense
              key={expense.key}
              expense={expense}
              categoryId={categoryId}
            />;
          })
          }
        </section>
      </ul>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { addExpense }
)(Expenses);