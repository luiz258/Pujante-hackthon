import { Button, makeStyles } from '@material-ui/core'
import balaoImg from '../../assets/balao.svg'
import {Link} from 'react-router-dom'

import './styles.css'

const useStyles = makeStyles(theme => ({
    balaoGroup: {
        display: 'flex',
        flexDirection: 'Column',
        alignItems: 'center',
        justifyContent:'center',
    },
    linkButton: {
        width: '100%',
    },
    button: {
        width: '100%',
        margin: '5px 0',
        borderRadius: '20px',
        fontSize: 11
    },
    textoDecoration: {
      fontWeight: 'bold',
      color: '#00004C',
      fontFamily: 'Roboto',
      maxWidth: 270,
      position: 'absolute',
      top: 375,
    },
    buttonGroup: {
        marginTop: '2rem'
    }
}))

const EmpatiaComponent = ({opcoes,backgroundImg, textoBalao}) => {
    const classes = useStyles();

    return (
    <>
    <img src={backgroundImg}/>
    <div className={classes.balaoGroup}>
        <img src={balaoImg} />
        <p className={classes.textoDecoration}>{textoBalao}</p>
        <div className={classes.buttonGroup}>
        {opcoes.map((opcao) => (
            <Link className={classes.linkButton} to={opcao.to}>
                <Button
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                
                >
                {opcao.texto}
            </Button>
            </Link>
           
           ))}
           </div>
    </div>
    </>
    )
}

export default EmpatiaComponent;