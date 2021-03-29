import React from 'react';
import './Header.css';

function Header(){
    return(
        <div class="header">
            <h1 class="head2">MKE11EVEN</h1>

            <a href="./Fanwear.html"><button class="tablink" onclick="openCity('Fanwear')"
                id="defaultOpen">Fanwear</button></a>

            <a href="./Cleats.html"><button class="tablink" onclick="openCity('Cleats', this, 'green')">Cleats</button></a>

            <a href="./Accessories.html"><button class="tablink"
                onclick="openCity('Accessories', this, 'blue')">Accessories</button></a>

            <a href="./Training."><button class="tablink"
                onclick="openCity('Training', this, 'orange')">Training</button></a>

            <i id="user" class="far fa-user-circle"></i>
        </div>
    )
}

export default Header;