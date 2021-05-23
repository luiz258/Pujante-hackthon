import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia10 from '../../../../assets/imgEmpatia10.svg'
import { Container } from '@material-ui/core';

function Empatia_10() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Supimpa!!! que ideal genial.
    isso nada mais que aplicar a forma empreendedora no problemas"
    backgroundImg={imgEmpatia10}
    opcoes={
        [
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
        {texto:'Certo, vc esta indo no caminho!',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_10;