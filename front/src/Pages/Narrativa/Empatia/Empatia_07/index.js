import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia06 from '../../../../assets/imgEmpatia06.svg'
import { Container } from '@material-ui/core';

function Empatia_07() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Com o apoio de alguns colegas o encontro vai se tornando
    uma reunião..."
    backgroundImg={imgEmpatia06}
    opcoes={
        [
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_07;