
import React from "react";
import Box from '@material-ui/core/Box';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';

import Fab from '@material-ui/core/Fab';
import {

    Link,
    Redirect
} from "react-router-dom";
import '../Meio/index.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button } from '@material-ui/core';
import Frame2 from '../../../../../assets/Frame2.svg';

const tutorialSteps = [
    {
        label: 'Essa mudança no mundo pode começar a partir de agora!...',
    },
    {
        label: 'Você será direcionado para outro mundo, onde se deparará com um cenário onde resolver problemas e a solução.',
    },
    {
        label: 'Você caiu de paraquedas em uma nova realidade.',
    },
    {
        label: 'Seja bem vindo a realidade (Empreendedora)',
    },
    {
        titlo: 'A formatura do 9º ano esta próxima',
        label: 'Nessa realidade paralela você e um aluno no qual o problema de todos também e seu problema.',
    },

    {
        titlo: ' ',
        label: ' ',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        background: '#f3f3f300',
        paddingLeft: theme.spacing(8),
    },

}));

function Meio() {


    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        console.log(activeStep);
        if (activeStep > 1) {
            < Link to="/">sdsasd</Link>
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);


    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    };



    return (<>
        <Navbar></Navbar>

        <Grid container className="fundo " classes={{  flexGrow:1 }}>
            <Grid container alignContent="space-around" >
                <Grid item xs={12} hidden={activeStep === 5}> <Fade in={true}><Grid xs={12} className="desc">{tutorialSteps[activeStep].label}</Grid></Fade></Grid>

              
 
               
            </Grid>
            <Grid container direction="row" justify="center" className="GroupAroundButton" >
            <Grid item xs  hidden={activeStep === 5} >
                    <Fab color="primary" onClick={handleBack} disabled={activeStep === 0} aria-label="arrowRight" pos>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Fab>
                </Grid>
                <Grid> <Link hidden={activeStep < 5} to="/" pos> <Button size="large" item xs={12} paddingTop={-8} variant="contained" color="primary" >Começar</Button></Link></Grid>

                <Grid item xs hidden={activeStep === 5}>
                    <Fab color="primary" className="dir" onClick={handleNext} hidden={activeStep === maxSteps - 1} disabled={activeStep === 5}pos>
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Fab>
                </Grid>
            </Grid>
           
            
                <Grid item xs  className="svg"><img src={Frame2} alt="frame" /></Grid>
               
        </Grid>
    </>
    )
}

export default Meio;