import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia02 from '../../../../assets/imgEmpatia02.svg'
import { Container } from '@material-ui/core';

function Empatia_03() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Como professor te aconselho a descomplicar, questione seus motivos, seja realista e sempre planeje seus passos."
    backgroundImg={imgEmpatia02}
    opcoes={
        [
        {texto:'Sei lá.  Vou fazer uns stories da galera.',to: '/narrativa/empatia/04'},
        {texto:'Vamos lá, mas o que fazer afinal...',to: '/narrativa/empatia/10'},
         ]}/>
</Container>
  )
}

export default Empatia_03;