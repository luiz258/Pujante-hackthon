import { Container } from "@material-ui/core";
import React from "react";
import Box from '@material-ui/core/Box';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';
import { Typography } from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import { positions } from '@material-ui/system';
import '../Inicio/index.css'
function Inicio() {
    return (<>
        <Navbar></Navbar>
        <Box >
            <div className="fundo">
                <div className="titulo">
                    <Typography className="fontTitulo" variant="h3" >
                        Seja bem vindo a realidade empreendedora!
                    </Typography>
                    <Typography className="descricao" variant="h4" component="h3">
                        Vamos conhecer como as coisas funcionam nesse mundo paralelo!
                    </Typography>
                </div>

                <Box position="relative"  left="60%">
                    <Fab color="primary" aria-label="arrowRight" variant="extended" pos>
                        Proximo <KeyboardArrowRightIcon />
                    </Fab>
                </Box>
            </div>
        </Box>
    </>
    )
}

export default Inicio;