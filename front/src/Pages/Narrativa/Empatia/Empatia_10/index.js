import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia10 from '../../../../assets/imgEmpatia10.svg'
import { Container } from '@material-ui/core';

function Empatia_10() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Supimpa! Que ideal genial.
    isso nada mais que aplicar a forma empreendedora no problemas"
    backgroundImg={imgEmpatia10}
    opcoes={
        [
        {texto:'Deixa a gelara resolver essa bucha.',to: '/narrativa/recomeco/03'},
        {texto:'Melhor levar isso pra eles.',to: '/narrativa/empatia/05' /* rota de erro */},
         ]}/>
</Container>
  )
}

export default Empatia_10;