import { put, post, get, del } from './request';

const URL = 'https://budget-sr.firebaseio.com';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

export const getCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each; 
        }) 
        : [];
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

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};