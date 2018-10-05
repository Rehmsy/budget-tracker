import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render()  {

    return (
      <div className={styles.header}>
      
        <section className="header-container">      
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/Landing">Landing</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/Dashboard">Dashboard</NavLink> 
              </li>
            </ul>
          </nav>
        </section>
        
      </div>
    );
  }
}

export default Header;