import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia04 from '../../../../assets/imgEmpatia04.svg'
import { Container } from '@material-ui/core';

function Empatia_04() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Tá todo mundo falando da formatura nas redes sociais.
    Será que fiz a escolha certa em passar tanto tempo no celular?"
    backgroundImg={imgEmpatia04}
    opcoes={
        [
        {texto:'Continuo na zoação das redes sociais.',to: '/narrativa/recomeco/02' /*rota de error */},
        {texto:'Converso nas redes sociais com os colegas.',to: '/narrativa/empatia/05'},
         ]}/>
</Container>
  )
}

export default Empatia_04;