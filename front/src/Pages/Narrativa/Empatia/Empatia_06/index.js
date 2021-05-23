import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia06 from '../../../../assets/imgEmpatia06.svg'
import { Container } from '@material-ui/core';

function Empatia_06() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Galera e se aplicarmos o trabalhado em sala sobre empreendedorismo para solucionar?
    vejo que alguns continuam na baderna, e agora!"
    backgroundImg={imgEmpatia06}
    opcoes={
        [
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_06;