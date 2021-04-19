import React from 'react';

import {Button, TextField, Box, Grid, Container, Typography} from '@material-ui/core';

class SignIn extends React.Component {
    // useStyles = makeStyles((theme) => ({
    //     submit: {
    //         margin: theme.spacing(3,0,2)
    //     }
    // }));
    // classes = this.useStyles();

    render () {
        return (
            <>
                <Container maxWidth="sm">
                    <Box m="auto" alignContent="center">
                    {/* <Grid container alignContent="center" alignItems="center" justify="center"> */}
                        <Typography component="h1" variant="h2" align="center">
                            Login
                        </Typography>
                        <form action="">
                            <TextField label="Email" variant="outlined" required fullWidth margin="normal"/>
                            <TextField label="Password" type="password" variant="outlined" required fullWidth margin="normal"/>
                            <Box mt={2} mb={2}>
                                <Button  variant="contained" color="primary" fullWidth type="submit" margin="normal">Login</Button>
                            </Box>
                            <Box textAlign="center">
                                <Button href="/signin" color="primary">Forgot Username/Password
                                </Button>
                            </Box>    
                        </form>
                    {/* </Grid> */}
                    </Box>
                    
                </Container>
               
            </>
        );
    }
}

export default SignIn;