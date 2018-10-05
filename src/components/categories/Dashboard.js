import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load, add, update } from './actions';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { getCategories } from './reducers';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { categories, add } = this.props;

    return (
      <div>
        <section>
          <h2>Add an expense category to get started:</h2>
          <CategoryForm onComplete={add}/>
        </section>

        {categories && 
          <section> 
            <h3>Categories and expenses:</h3>
            <Categories
              categories={categories}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: getCategories(state)
  }),
  { load, add }
)(Dashboard);