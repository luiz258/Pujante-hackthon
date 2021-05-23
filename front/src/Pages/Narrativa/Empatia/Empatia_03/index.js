import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia02 from '../../../../assets/imgEmpatia02.svg'
import { Container } from '@material-ui/core';

function Empatia_03() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Como professor te aconselho a descomplicar, questione seus motivos, seja realista e sempre planeje seus passos"
    backgroundImg={imgEmpatia02}
    opcoes={
        [
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_03;