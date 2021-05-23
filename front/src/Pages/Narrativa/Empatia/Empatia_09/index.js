import React from 'react';


import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia04 from '../../../../assets/imgEmpatia04.svg'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  check: {
    color: 'green',
    position: 'relative',
    top: -38,
    left: 80,
  }
}))

function Empatia_09() {

  const classes = useStyles();

  return (
    <Container fluid maxWidth="xs">
    
    <EmpatiaComponent
    textoBalao="Você esta pegando o jeito,  aos poucos esta absorvendo a forma empreendedora de ser.
    Sua missão não acabou mas sua fase foi superada criando um bom cenário."
    backgroundImg={imgEmpatia04}
    finalizar={true}
    opcoes={
        [
        {texto:'Finalizar',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_09;