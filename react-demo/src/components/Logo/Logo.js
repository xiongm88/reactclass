import React from 'react';
import './Logo.css';

function Logo (props){
    return(
        <div>
            <img src={props.logo} alt={props.logoAlt}/>;
        </div>
    );
};

export default Logo;