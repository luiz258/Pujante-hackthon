import React from 'react';

import EmpatiaComponent from '../../../../components/EmpatiaComponent';
import imgEmpatia06 from '../../../../assets/imgEmpatia06.svg'
import { Container } from '@material-ui/core';

function Empatia_08() {
  return (
    <Container fluid maxWidth="xs">
    <EmpatiaComponent
    textoBalao="Finalmente uma reunião de verdade!"
    backgroundImg={imgEmpatia06}
    opcoes={
        [
        {texto:'Falar minha ideia, e impor minha solução.', to: '/' /* rota de erro */},
        {texto:'Certo, vc esta indo no caminho!',to: '/narrativa/empatia/09'},
         ]}/>
</Container>
  )
}

export default Empatia_08;