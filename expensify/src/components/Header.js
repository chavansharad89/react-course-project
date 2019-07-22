import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Add</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>

        </nav>
    </header>
);

export default Header;
