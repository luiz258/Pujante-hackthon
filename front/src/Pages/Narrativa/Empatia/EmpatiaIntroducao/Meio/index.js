
import React from "react";
import Box from '@material-ui/core/Box';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';

import Fab from '@material-ui/core/Fab';

import '../Meio/index.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { MobileStepper } from '@material-ui/core';
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
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (<>
        <Navbar></Navbar>
        <Box  className="fundo ">
            <Box>
               <Box p={2} className="svg"> <Typography>{tutorialSteps[activeStep].label}</Typography></Box>
               <MobileStepper
                className="Stepper"
                steps={maxSteps}
                position="relative"
                nextButton={
                    <Fab color="primary" onClick={handleNext} hidde={activeStep === maxSteps - 1}>
                         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Fab>
                }
                backButton={
                <Fab color="primary" onClick={handleBack} disabled={activeStep === 0} aria-label="arrowRight" variant="extended" pos>
                       {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Fab>
                }
            />
                <Box className="svg"><img  src={Frame2} alt="frame" /></Box>
            </Box>
            
        </Box>
    </>
    )
}

export default Meio;