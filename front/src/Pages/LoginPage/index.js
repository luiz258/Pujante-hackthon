import {TextField, FormControl, Container, makeStyles, Grid} from '@material-ui/core';


const LoginPage = () => {
    return (
    <Container>
       <FormControl>
           <Grid   
           container
            direction="column-reverse"
            justify="center"
            alignItems="center"> 
            <Grid item>
                <TextField id="standard-basic" label="Email"/>
            </Grid>
            <Grid item>
                <TextField id="standard-basic" label="Senha"/>
            </Grid>

           </Grid>
       </FormControl>

    </Container>
    )
}

export default LoginPage;