import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { categories } from '../components/categories/reducers';
import { expensesByCategory } from '../components/categories/reducersExpenses';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';


const combined = combineReducers({ 
  categories, 
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;

