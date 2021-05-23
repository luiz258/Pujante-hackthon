
import React from "react";
import Box from '@material-ui/core/Box';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';
import { Typography } from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';

import Frame1 from '../../../../../assets/Frame1.svg';
import '../Inicio/index.css'
function Inicio() {
    return (<>
      
        <Box >
            <div className="fundo">
                <Navbar/>
                <div className="titulo">
                    <Typography className="fontTitulo" variant="h3" >
                        Seja bem vindo a realidade empreendedora!
                    </Typography>
                    <Typography className="descricao"  variant="h5">
                        Vamos conhecer como as coisas funcionam nesse mundo paralelo!
                    </Typography>
                </div>

                <Box position="relative" className="FabButtonPosistion">
                    <Fab color="primary"  aria-label="arrowRight" variant="extended" pos>
                        Proximo <KeyboardArrowRightIcon />
                    </Fab>
                </Box>
                    <img className="menino-loiro" src={Frame1} alt="frame" />                
            </div>
        </Box>
    </>
    )
}

export default Inicio;