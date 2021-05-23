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
        {texto:'Eu e minha turma dizemos como vai ser.',to: '/' /*rota de erro */},
        {texto:'Tentamos dar vez e voz a todos.',to: '/narrativa/empatia/08' /*Rota para segunda fase */},
         ]}/>
</Container>
  )
}

export default Empatia_07;