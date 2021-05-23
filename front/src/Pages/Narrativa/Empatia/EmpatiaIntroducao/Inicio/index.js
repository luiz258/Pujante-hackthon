
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../../../../components/Navbar";
import '../Inicio/index.css';


import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Logo from '../../../../../assets/logo.svg';
import Frame7 from '../../../../../assets/Frame7.svg';
import '../Inicio/index.css'
import { Link } from "react-router-dom";


function Inicio() {
    return (<>

        <div >
            <div className="fundo">
                <Grid container className="titulo">
                    <Grid item xs={12}> <h3 className="fontTitulo"  >
                        Seja bem vindo ao
                    </h3>
                    </Grid>
                    <Grid item xs={12}>
                        <img className="center" className="logo" src={Logo} alt="frame" />
                    </Grid>
                    <Grid container className="FabButtonPosistion">
                        <Link to="/narrativa/empatia/introducao/meio">
                        <Fab item xs={12} color="primary" aria-label="arrowRight" variant="extended" >
                            Proximo <KeyboardArrowRightIcon />
                        </Fab>
                        </Link>
                    </Grid>
                </Grid>


                {/* <img className="menino-loiro" src={Frame7} alt="frame" />                 */}
            </div>
        </div>


    </>
    )
}

export default Inicio;