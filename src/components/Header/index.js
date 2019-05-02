import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profiles = () =>
    <header className="header">
        <div>
            <h1>Romeo</h1>
            {/*<p>Find your perfect match</p>*/}
            <FontAwesomeIcon icon="fire" />
            <div className="Flag">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>

export default Profiles
