import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia04 from '../../../../assets/imgEmpatia04.svg'
import { Container } from '@material-ui/core';

function Empatia_05() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Nossa!!! com tanta baderna fica ruim chegar em um consenso"
    backgroundImg={imgEmpatia04}
    opcoes={
        [
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_05;