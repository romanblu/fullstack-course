import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Button, Input, Form, Segment, Grid, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    render () {
        return (
            <>
                <div>
                    <Grid verticalAlign="middle" centered columns={2} style={{height:"100vh" }}>
                        <Grid.Column style={{maxWidth:"450px" }}>
                            <Header as="h1" textAlign='center'>
                                Login
                            </Header>
                            
                            <Form centered>
                                <Segment raised stacked>
                                    <Form.Field>
                                        <Input focut placeholder="Email" />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input focut placeholder="Password" />
                                    </Form.Field>
                                    <Form.Field>
                                        <Button fluid type="submit">Login</Button>
                                    </Form.Field>
                                    <Grid>
                                        <Grid.Column textAlign="center">
                                            <Link to="/">Forgot Username/Password</Link>
                                        </Grid.Column>
                                    </Grid>
                                    
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>
            </>
        );
    }
}

export default SignIn;