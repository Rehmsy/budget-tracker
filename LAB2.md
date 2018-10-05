Budget Tracker - Lab 2 "Expenses"
===

**Combine Reducers and Selectors**

Today you'll add expenses that belong to categories.

## Submission Instructions

* continue working from previous LAB 1.
* submit a pull request to the project
  * **Use different source branch!**

## Data 

### `category`
s
Update each category to have an expenses property that is an array of expense objects. Keep in mind that when 
categories get loaded, the data will be split out into the `categories` reducers and an `expensesByCategory` reducer.

### `expense`

In this app an expense should contain at least the following properties:

* `id` a uuid
* `categoryId` an id that corresponds to an existing category
* `timestamp` a date from when the expense was created
* `name` a string that is the name of the expense
* `price` a number that is the amount of the expense
* feel free to add more to your expense if you want

## Redux

### combine reducers

* import all of your reducers into `store.js`
* import and use `combineReducers` from `redux` to combine all imported reducers into one reducer.
* Pass that reducer to the `createStore` call
* export the created store
* HINT: update your code to include redux dev tools:
    ```js
    const combined = combineReducers({
      categories,
      expensesByCategory
    });
    
    const store = createStore(
      combined, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    export default store;
    ```
    
### `categories` reducer

* Add "update" capability to your category reducer and actions

### `expensesByCategory` reducer

* Add new reducer `expensesByCategory` that maintains a dictionary by categoryId where 
each value is an array of expenses.
* Reducer needs to support the following interactions 
  * `EXPENSE_ADD` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
  * Plus support `CATEGORY` actions for load, add, and delete

### action creators

* you should create an action creator for each interaction supported by your expenses reducer

## Selectors

* All connect functions should use selectors exported by the reducers.
* The full signature is `mapStateToProps(state, ownProps)`. Meaning you can get a passed
id and pass that to selector:
    ```js
    (state, { id }) => ({
        expenses: getExpensesByCategory(state, id)
    })
    ```
    
## Components

Create the following components and structure them according to the following diagram.  

``` 
Provider
  App
    Dashboard
      CategoryForm -- for creating categories
      Categories -- list of categories
        Category -- wrapper and container for either display or form          
          CategoryForm  -- for updating category
          CategoryItem -- display of category  
            Expenses -- for list of expenses
              ExpenseForm -- for creating expenses
              Expense
                ExpenseItem  -- list of expense items
                ExpenseForm -- for updating an expense
```

### Update Category Component

* Either Displays the CategoryItem, or the CategoryForm when editing
* Should be the "connect" point for state/actions needed by CategoryItem and CategoryForm

### Update the CategoryItem

* Should keep all of the features described in prior lab
* Display the Expenses component for the category (pass the category id)

### Expenses
* Displays the expenses belonging to the specified category (connect will 
need to use state and own props)
* Shows the ExpenseForm for adding a new expense
* Shows a list of Expense components

### Expense Component 

* Either Displays the ExpenseItem or the ExpenseForm when editing

### ExpenseForm Component 

* should be used to both add and update an expense

#### Test

* Test all of your action creators
* Test each reducer used in your apps combineReducers
* Provide snapshot tests for components
* Test components that toggle between two views

####  Documentation  
Write a description of the project in your README.md

## Rubric

* Overall app functionality is correct **4pts**
* Update Category (components, reducers, actions) **2pts**
* Tested Category selectors **1pts**
* Expense Components (Expenses, Expense, ExpenseItem, ExpenseForm) **4pts**
* Tested Expense reducers and actions **4pts**
* Tested Expense selectors **3pts**
* Project and code consistency, cleanliness, and organization **2pts**

