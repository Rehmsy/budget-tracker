import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducersExpenses';
import { removeExpense } from '../../services/budgetAPI';
import shortid from 'shortid';

export const addExpense = (categoryId, expense) => {

  expense.key = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: {
      categoryId,
      expense
    }
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense).then(() => expense)
});