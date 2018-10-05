import { put, post, get, del } from './request';

const URL = 'https://budget-sr.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;
const getExpensesUrl = key => `${CATEGORY_URL}/${key}.json`;

const pivot = obj => {
  if(!obj) return [];
  
  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const getCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      const categories = pivot(response);
      categories.forEach(category => category.expenses = pivot(category.expenses)); 
      return categories;
    });
};

export const addCategory = category => {
  const url = `${CATEGORY_URL}.json`;
  return post(url, category)
    .then(response => {
      category.key = response.name;
      return category;
    });
};

export const updateCategory = category => {
  // eslint-disable-next-line
  //const { key, ...copy } = category;
  const url = getCategoryUrl(category.key);
  return put(url, category);
};

export const removeCategory = key => {
  const url = getCategoryUrl(key);
  return del(url);
};

export const addExpense = expense => {
  const expenseUrl = getExpensesUrl(expense.categoryId);
  const url = `${expenseUrl}.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const { categoryId, key } = expense;
  const url = `${getExpensesUrl(categoryId)}/${key}.json`;
  return put(url, expense);
};

export const removeExpense = (expense) => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses/${expense.key}.json`;
  return del(url);
};