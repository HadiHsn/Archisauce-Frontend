
import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const axios = require('axios').default;

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        }
        this.handleValidSubmit = this.handleValidSubmit.bind(this)
    }

    handleValidSubmit(event, values) {
        var body = values;
        console.log(body)
        axios.post('https://archisauce-backend.herokuapp.com/mailingsubscription', body)
            .then((response) => {
                console.log(response.data)
                this.setState({ status: "Successfully Added Your Email!" })
            })
            .catch((error) => {
                console.log(error.response)
                this.setState({ status: error.response.data })
            });

    }

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-1 col-lg-3 margin-t-20">
                                <h4>Archisauce</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#features">Objective</a></li>
                                        <li><a href="#latestnews">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Information</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#servicesapply">Apply</a></li>
                                        <li><a href="#contact">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 margin-t-20">
                                <h4>Subscribe</h4>
                                <div className="text-muted margin-t-20 text-justify">
                                    <p>Our mails cover announcements from Archisauce team and includes services that Archisauce project directly or indirectly provides.</p>
                                </div>
                                <AvForm onValidSubmit={this.handleValidSubmit}>
                                    {this.state.status && <div className="alert alert-warning text-center">{this.state.status}</div>}

                                    <div className="form subscribe">
                                        <AvField type="email" name="email" className="form-control" placeholder="Email" required />
                                        <button type="submit" className="submit pe-7s-paper-plane bg-subscribe"></button>
                                    </div>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Footer;