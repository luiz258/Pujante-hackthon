import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Navbar from "./../../components/Navbar";
import Grid from '@material-ui/core/Grid';
import './../Home/index.css'
import Mapa from "./../../assets/mapaFases.svg";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
function Home(){
    return (
      <>
       <Navbar ></Navbar>
       <Alert variant="filled" severity="info">
       Para ter melhor experiencia utilize o formato mobile no navegado, usando o atalho Ctrl+Shift+M!
      </Alert>
       <Grid container  justify="center" >
      
        <img  src={Mapa} style={{}} />
        </Grid>
        <Link className="botao1" to="/narrativa/empatia/01/"><Button  variant="contained" color="primary">Fase 1</Button ></Link>
        <Link className="botao2"><Button variant="contained" color="primary">Fase 2</Button ></Link>
        <Link className="botao3"><Button variant="contained" color="primary">Fase 3</Button ></Link>
     
</>
    
    )
}

export default Home;