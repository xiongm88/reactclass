import React from 'react';
import './Header.css';
import Button from '../Button/Button'
import Grid from '@material-ui/core/Grid';


function Header(){
    const [firstName, setFirstName] = React.useState(['FAN WEAR', 'CLEATS', 'ACCESSORIES', 'TRAINING']);

    const changefirstName = ()=> {
        setFirstName('About You')
    }

    return(
        <div class="header">
            <h1 class="head2">MKE11EVEN</h1>

            <Grid container spacing={0}>
                {firstName.map(item=>
                    <div>
                        <Button buttonName={item}/>
                    </div>
                    )}
            </Grid>
        </div>
    )
}

export default Header;