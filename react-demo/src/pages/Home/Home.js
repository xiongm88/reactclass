import React, {useState} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import {Grid} from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Ace from '../../pics/acespeed.jpeg';
import Merc from '../../pics/merc.jpeg';
import Messi from '../../pics/messi.jpg';
import Xspeed from '../../pics/xspeed.jpeg';


function Home(props){
    return(
        <div>
            <Header/>

            <Grid container spacing={3}>
                <Grid item xs='3'>
                    <Card avatar="A" title="Adidas Ace 16+ Speed Of Light Pack" date="March 29, 2021" image={Ace} imageTitle="Ace 16+" description1="Adidas Ace 16+ Speed Of Light Pack" description2="FG Soccer Cleat" description3="$249.00"/>
                </Grid>
                <Grid item xs='3'>
                    <Card avatar="N" title="Nike Mercurial Vapor Tropical Pack" date="March 29, 2021" image={Merc} imageTitle="Mercurial" description1="Nike Mercurial Vapor Tropical Pack" description2="FG Soccer Cleat" description3="$249.00"/>
                </Grid>
                <Grid item xs='3'>
                    <Card avatar="A" title="Adidas Messi 16+ Speed Of Light Pack" date="March 29, 2021" image={Messi} imageTitle="Messi 16+" description1="Adidas Messi 16+ Speed Of Light Pack" description2="FG Soccer Cleat" description3="$249.00"/>
                </Grid>
                <Grid item xs='3'>
                    <Card avatar="A" title="Adidas X 16+ Speed Of Light Pack" date="March 29, 2021" image={Xspeed} imageTitle="X 16+" description1="Adidas X 16+ Speed Of Light Pack" description2="FG Soccer Cleat" description3="$249.00"/>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
};

export default Home;