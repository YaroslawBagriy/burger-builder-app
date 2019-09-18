import React from 'react';

// Image URL will be dynamically resolved by Webpack
import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}> 
        <img src={burgerLogo} alt="Burger Builder App"/>
    </div>
);

export default logo;