import React from 'react';
import './Button.css';

function Button(props){
    return(
        <div class="outer">
            <button className='button' onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}

export default Button;