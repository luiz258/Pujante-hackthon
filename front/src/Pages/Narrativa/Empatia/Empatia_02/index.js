import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia02 from '../../../../assets/imgEmpatia02.svg'
import { Container } from '@material-ui/core';

function Empatia_02() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Encontrei o professor, ele questionou sobre o evento"
    backgroundImg={imgEmpatia02}
    opcoes={
        [
        {texto:'Vou pensar mais sobre isso',to: '/narrativa/empatia/03'},
        {texto:'Deixa eu ir ver a turma',to: '/narrativa/empatia/05'},
         ]}/>
</Container>
  )
}

export default Empatia_02;