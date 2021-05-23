import React from "react";

import Navbar from "./../../../../components/Navbar";
import Grid from '@material-ui/core/Grid';
import './index.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Recomeco1 from '../../../../assets/Recomeco1.svg';
function Recomeco01(){
    return (
      <>
       <div >
            <div className="fundo">
                <Navbar />
                <Grid container>
                    <Grid item xs={12}> 
                    <h3 className="fontTitulo titulo"  >
                        É hora reavaliar suas escolhas...
                    </h3>
                    </Grid>
                    <Grid item xs={12}> <p className="desc" >
                    Temos mais a aprender com os erros do que com os acertos.
                        Use os erros pra te alavancar nas tuas decições.
                    </p>
                    </Grid>
                    <Grid container >
                        <Grid xs={12}>
                        <img className="center" style={{width: '100vw', maxWidth:'380px' ,position: 'relativo'}} src={Recomeco1} className="menino-loiro "  alt="frame" />
                        </Grid>
                    </Grid>
                    <Grid  item xs={12} className="FabButtonPosistion">
                        <Link to="/narrativa/empatia/introducao/meio">
                        <Fab item xs={12} color="primary" aria-label="arrowRight" variant="extended" >
                            Retornar <KeyboardArrowRightIcon />
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

export default Recomeco01;