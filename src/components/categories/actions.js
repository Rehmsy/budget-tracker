import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { getCategories, addCategory, updateCategory, removeCategory } from '../../services/budgetAPI';
import shortid from 'shortid';
 
export const load = () => ({
  type: CATEGORY_LOAD,
  payload: getCategories()
});

export const add = category => {
  category.key = shortid.generate();
  category.timestamp = new Date();
  category.expense = [];
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(key).then(() => key)
});


