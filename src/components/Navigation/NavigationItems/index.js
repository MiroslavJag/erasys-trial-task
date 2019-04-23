import React from 'react';
import NavigationItem from '../NavigationItem';
import './index.css'

const NavigationItems = () => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/profile-details">Profile Details</NavigationItem>
    </ul>
)

export default NavigationItems;
