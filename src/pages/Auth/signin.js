import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import ArchisauceLogo from '../../images/ArchisauceLogo.png';

const axios = require("axios").default

class Signin extends Component {

    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            status: ""
        }
    }

    componentDidMount() {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    }

    onValidSubmitLogin = (event, values) => {
        let { modifyUser } = this.props
        var body = values
        console.log("These are the props: ", this.props)
        // console.log(body)
        axios.post('https://archisauce-backend.herokuapp.com/signin', body)
            .then((response) => {

                this.setState({ status: "Successfully logged in" })

                // console.log(response.data);
                // console.log(response.data.user.firstName);
                var firstName = response.data.user.firstName;
                var email = response.data.user.email;
                modifyUser(firstName, email, true);
                if(this.props.location.state){
                    this.props.history.push(this.props.location.state.to)
                }else {
                    this.props.history.push("/home");
                }
            })
            .catch((error) => {
                console.log(error.response)
                this.setState({ status: error.response.data.message })
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="account-home-btn d-none d-sm-block">
                    <Link to="/" className="text-white"><i className="mdi mdi-home text-orange h1"></i></Link>
                </div>

                <section className="height-100vh">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        <Card className="account-card">
                                            <CardBody className="card-body">
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold"><Link className="navbar-brand logo text-uppercase" to="/"><img alt="" src={ArchisauceLogo} className="img-fluid rounded Archisaucelogo" /></Link></h3>
                                                    <p className="text-muted">Sign in to continue to Archisauce.</p>
                                                </div>
                                                <div className="p-3">

                                                    <AvForm onValidSubmit={this.onValidSubmitLogin}>
                                                        {this.state.status && <div className="alert alert-warning text-center">{this.state.status}</div>}

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="email">Email</label>
                                                            <AvField type="email" name="email" className="form-control" placeholder="Enter your email" required />
                                                        </div>

                                                        <div className="form-group text-orange">
                                                            <label htmlFor="userpassword">Password</label>
                                                            <AvField type="password" name="password" className="form-control" placeholder="Enter password" required />
                                                        </div>

                                                        <div className="mt-3">
                                                            <button type="submit" className="btn btn-custom btn-block btn-width-50">Sign In</button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <p> Don't Have an Account?<Link to="/signup" className="text-orange-btn"> Sign Up</Link></p>
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

export default Signin;