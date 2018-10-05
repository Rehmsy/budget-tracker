import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {

  state = {
    key: null,
    categoryId: null,
    name: '',
    price: 0
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    categoryId: PropTypes.string
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;

    this.setState(expense);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { key, categoryId, name, price } = this.state;
    const expense = { categoryId, name, price }
;
    if(key) expense.key = key;

    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { key, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" placeholder="Expense Name" value={name} onChange={this.handleChange}/>
        <InputControl name="price" value={price} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default ExpensesForm;