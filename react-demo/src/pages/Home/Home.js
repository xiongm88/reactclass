import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Card2 from '../../components/Card/Card2';
import Card3 from '../../components/Card/Card3';
import Card4 from '../../components/Card/Card4';
import {Grid} from '@material-ui/core';
import Logo1 from '../../components/Logo/Logo1'

function Home(){
    return(
        <div>
            <Header/>
            <Grid container spacing={3}>
                <Grid item xs='3'>
                    <Card/>
                </Grid>
                <Grid item xs='3'>
                    <Card2/>
                </Grid>
                <Grid item xs='3'>
                    <Card3/>
                </Grid>
                <Grid item xs='3'>
                    <Card4/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home;