import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia04 from '../../../../assets/imgEmpatia04.svg'
import { Container } from '@material-ui/core';

function Empatia_09() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Você esta pegando o jeito,  aos poucos esta absorvendo a forma empreendedora de ser.
    Sua missão não acabou mas sua fase foi superada criando um bom cenário."
    backgroundImg={imgEmpatia04}
    opcoes={
        [
        {texto:'Continuar.',to: '/' /*rota para fase 2*/ },
        {texto:'Voltar para menu',to: '/'},
         ]}/>
</Container>
  )
}

export default Empatia_09;