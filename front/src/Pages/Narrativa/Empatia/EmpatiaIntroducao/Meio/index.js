
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
import Frame9 from '../../../../../assets/Frame9.svg';
import Frame11 from '../../../../../assets/Frame11.svg';
import Frame10 from '../../../../../assets/Frame10.svg';
import Frame8 from '../../../../../assets/Frame8.svg';

const tutorialSteps = [
    {
        label: 'Acordar querendo mudar o mundo, talvez uma boa alternativa seja mudar o mundo a sua volta e até mesmo o seu.',
        frame: Frame8,
    },
    {
        label: 'Essa mudança no mundo pode começar a partir de agora!...',
        frame: Frame9,
    },
    {
        label: 'Você será direcionado para outro mundo, onde se deparará com um cenário onde resolver problemas e a solução.',
        frame: Frame10,
    },
    {
        titulo: 'A formatura do 9º ano esta próxima',
        label: 'Nessa realidade paralela você e um aluno no qual o problema de todos também e seu problema.',
        frame: Frame11,
    }, {
        label: 'Voce',
    }
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
        <Grid container className="fundo " >
            <Grid container> <Fade in={true} className="titulo"><Grid xs={12}  >{tutorialSteps[activeStep].titulo}</Grid></Fade>
            </Grid>
            <Grid container >

                <Fade in={true}>
                    <Grid xs={12} hidden={activeStep === 4} className="desc"  >{tutorialSteps[activeStep].label}</Grid></Fade>
            </Grid>

            <Grid item xs className="svg"><img className="center" src={tutorialSteps[activeStep].frame} alt="frame" /></Grid>
            <Grid container direction="row" justify="center" className="GroupAroundButton" >
                <Grid item xs hidden={activeStep === 3} >
                    <Fab color="primary" onClick={handleBack} disabled={activeStep === 0} aria-label="arrowRight" pos>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Fab>
                </Grid>
                <Grid className="btnFim"> <Link hidden={activeStep < 3} to="/" > <Button size="large" item xs={12} variant="contained" color="primary" >Começar</Button></Link></Grid>

                <Grid item xs hidden={activeStep === 3}>
                    <Fab color="primary" className="dir" onClick={handleNext} hidden={activeStep === maxSteps - 1} disabled={activeStep === 5} pos>
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Fab>
                </Grid>
            </Grid>




        </Grid>
    </>
    )
}

export default Meio;