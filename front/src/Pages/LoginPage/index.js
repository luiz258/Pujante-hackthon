import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import Logo from './../../assets/logo.svg';


const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        width: '70%',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      forms: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(4, 0, 2),
      },
}))

const LoginPage = () => {

    const history = useHistory();

    const initialValues = {
        email: '', 
        password: ''
    }
    const [values, setValues] = useState(initialValues)
    const [inputErros, setInputErros] = useState({email: false, password: false})

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           const {data } = await api.get(`/users?email=${values.email}&password=${values.password}`)
            if(data.length) {
                localStorage.setItem('name', data[0].name);
                localStorage.setItem('email', data[0].email);
                history.push('/narrativa/empatia/introducao/inicio');
            } else {
                setInputErros({email: true, password: true})
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        const {value, name} = e.target;

        setValues({...values, [name]: value})
    }

    console.log(values);
    const classes = useStyles();
    return (

        <Container  maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div>
            <img src={Logo}></img>
          </div>
          <Alert variant="filled" severity="info">
       <p>Para ter melhor experiencia utilize o formato mobile no navegado, usando o atalho Ctrl+Shift+M!</p> 
       <p> Conta de Acesso: <br/>  email: saitama@gmail.com, Senha: 123</p>
      </Alert>
          <form onSubmit={handleSubmit} className={classes.forms} noValidate>
            <TextField
            variant="outlined"
            error={inputErros.email}
            onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              helperText="Email incorreto."

            />
            <TextField
            variant="outlined"
            error={inputErros.password}

            onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              helperText="Senha incorreta."
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              size="large"
              className={classes.submit}
            >
              Entrar
            </Button>

          </form>
        </div>

      </Container>

    )
}
export default LoginPage