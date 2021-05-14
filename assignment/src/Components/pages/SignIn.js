import React from 'react';
import axios from 'axios';
import {Button, TextField, Box, Grid, Container, Typography} from '@material-ui/core';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resp: null,
            user:null,
            password:null
        };
    }


    changeUsername = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const url = "/login";
        const data = {
            user : this.state.user,
            password: this.state.password
        }

        axios.post(url,data).then(res => {
            this.setState({
                data: [],
                resp: "Success, user logged in "
            });

            this.props.onSignIn(data);

        }).catch(err => {
            this.setState({
                data: [],
                resp: "Error, could not login user"
            });
        });
    }

    render () {
        return (
            <>
                <Container maxWidth="sm">
                    <Box mt={"20vh"} alignContent="center">
                        
                        <Typography component="h1" variant="h2" align="center">
                            Login
                        </Typography>
                        <form action="">
                            <TextField onChange={this.changeUsername} label="Username" variant="outlined" required fullWidth margin="normal"/>
                            <TextField onChange={this.changePassword} label="Password" type="password" variant="outlined" required fullWidth margin="normal"/>
                            <Box mt={2} mb={2}>
                                <Button onClick={this.login} variant="contained" color="primary" fullWidth type="submit" margin="normal">Login</Button>
                            </Box>
                            <Box textAlign="center">
                                <Button href="/signin" color="primary">Forgot Username/Password
                                </Button>
                                <Button href="/signup" color="secondary">No account? Sign up!
                                </Button>
                            </Box>    
                        </form>
                       

               
                    </Box>
                    
                </Container>
               
            </>
        );
    }
}

export default SignIn;