import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

const NavigationItem = ( props ) => (
    <li >
        <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default NavigationItem;
