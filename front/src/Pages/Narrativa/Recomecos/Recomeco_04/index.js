import React from "react";

import Navbar from "./../../../../components/Navbar";
import Grid from '@material-ui/core/Grid';
import './index.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Recomeco2 from '../../../../assets/Recomeco2.svg';
function Recomeco04(){
    return (
      <>
       <div >
            <div className="">
                <Navbar />
                <Grid container>
                    <Grid item xs={12}> 
                    <h3 className="fontTitulo titulo"  >
                    Deixa de bobeira
                    </h3>
                    </Grid>
                    <Grid item xs={12}> <p className="desc" >
                    É hora de aprender sobre paciência e inteligência emocional.
Volta lá e participa!
                    </p>
                    </Grid>
                    <Grid container >
                        <Grid xs={12}>
                        <img className="center" style={{width: '100vw', maxWidth:'300px' ,position: 'relativo'}} src={Recomeco2} className="menino-loiro "  alt="frame" />
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

export default Recomeco04;