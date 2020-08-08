import React, { Component } from 'react';
import './signup.css';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';

export default class SignupForm extends Component {
    render() {
        return (
            <div class="wrapper">
            <div class="formsignup">
                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <Form horizontal>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Name
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" id="fullname" name="fullname" placeholder="Full Name" required/>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="email" id="email" name="email" placeholder="Email" required />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="password" id="password" name="password" placeholder="Password" required />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button bsStyle="primary" type="submit">Sign up</Button>                                        
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
            </div>
        );
    }
}
