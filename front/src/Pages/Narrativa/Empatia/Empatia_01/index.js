
import { Container, makeStyles } from '@material-ui/core';

import imgEmpatia01 from '../../../../assets/imgEmpatia01.svg'
import EmpatiaComponent from '../../../../components/EmpatiaComponent';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
    }
}))

const Empatia_01 = () => {

    const classes = useStyles()

    return ( 
    
    <Container fluid maxWidth="xs">
        <EmpatiaComponent
        textoBalao="Vejo vários alunos desorganizados tumultuando sobre a questão levantada, alguns até gritando."
        backgroundImg={imgEmpatia01}
        opcoes={
            [
            {texto:'Humm, acho que vou deixar isso quieto.',to: '/narrativa/empatia/02'},
            {texto:'Vou lá apaziguar.',to: '/narrativa/empatia/05'},
            {texto:'Vou falar com professores.',to: '/narrativa/empatia/03'},
             ]}/>
    </Container>

    )
}

export default Empatia_01;