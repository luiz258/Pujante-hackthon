
import React from "react";
import Box from '@material-ui/core/Box';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';
import { Typography } from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';

import frame1 from '../../../../../assets/frame1.svg';
import '../Inicio/index.css'
function Meio() {
    return (<>
        <Navbar></Navbar>
        <Box >
            <div className="fundo">
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
                <div className="">
                   
                    <img className="" src={frame1} alt="frame" />
                </div>
            </div>
        </Box>
    </>
    )
}

export default Meio;