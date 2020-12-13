import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import ArchisauceLogo from '../../images/ArchisauceLogo.png';

const axios = require('axios').default;

class Signup extends Component {

    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            status: ""
        }
        this.handleValidSubmit = this.handleValidSubmit.bind(this)
    }

    componentDidMount() {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    }

    handleValidSubmit(event, values) {
        if (values.password === values.confirmPassword) {
            this.setState({ passwordsDidntMatch: false })
            var body = {
                firstName: values.firstName,
                email: values.email,
                password: values.password
            };
            console.log(body)
            axios.post('https://archisauce-backend.herokuapp.com/signup', body)
                .then((response) => {
                    console.log(response.data)
                    this.setState({ status: "Successfully signed up,Sign in please!" })
                    this.props.history.push("/signin")
                })
                .catch((error) => {
                    console.log(error.response)
                    this.setState({ status: error.response.data })
                });

        }
        else {
            this.setState({ status: "Passwords didn't match" })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="account-home-btn d-none d-sm-block">
                    <Link to="/" className="text-white"><i className="mdi mdi-home text-orange position-attachment h1"></i></Link>
                </div>

                <section className="height-100vh">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        <Card className="account-card">
                                            <CardBody>
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold"><Link className="navbar-brand logo text-uppercase" to="/"><img alt="" src={ArchisauceLogo} className="img-fluid rounded Archisaucelogo" /></Link></h3>
                                                    <p className="text-muted">Sign up for a new Account</p>
                                                </div>
                                                <div className="p-3">
                                                    <AvForm onValidSubmit={this.handleValidSubmit}>
                                                        {this.state.status && <div className="alert alert-warning text-center">{this.state.status}</div>}

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="firstname">First Name</label>
                                                            <AvField type="text" name="firstName" className="form-control" placeholder="First Name" required />

                                                        </div>

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="email">Email</label>
                                                            <AvField type="email" name="email" className="form-control" placeholder="Enter Email" required />
                                                        </div>

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="userpassword">Password</label>
                                                            <AvField type="password" name="password" className="form-control" placeholder="Enter password" required />
                                                        </div>

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="userconfirmpassword">Confirm Password</label>
                                                            <AvField type="password" name="confirmPassword" className="form-control" placeholder="Enter password Again" required />
                                                        </div>

                                                        <div className="mt-3">
                                                            <button type="submit" className="btn btn-custom btn-block btn-width-50">Sign up</button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <p className="mb-0">Already Have an Account ? <Link to="/signin" className="text-orange-btn">Sign In</Link></p>
                                                        </div>
                                                    </AvForm>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Signup;