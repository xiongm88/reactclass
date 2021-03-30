import React from 'react';
import './Header.css';
import Button from '../Button/Button'
import Grid from '@material-ui/core/Grid';


function Header(){
    const [firstNames, setFirstNames] = React.useState(['FAN WEAR', 'CLEATS', 'ACCESSORIES', 'TRAINING']);
    const [currentUser, setCurrentUser] = React.useState('MKE11EVEN');

    const changefirstName = ()=> {
        setFirstNames('About You')
    }

    return(
        <div class="header">
            <h1 class="head2">{currentUser}</h1>

            <Grid container spacing={0}>
                {firstNames.map(item=>
                    <div>
                        <Button buttonName={item}/>
                    </div>
                    )}
            </Grid>
        </div>
    )
}

export default Header;