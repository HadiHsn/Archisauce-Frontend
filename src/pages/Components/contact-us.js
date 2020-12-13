
import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const axios = require('axios').default;

class ContatUs extends Component {
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
        axios.post('https://archisauce-backend.herokuapp.com/message', body)
            .then((response) => {
                console.log(response.data)
                this.setState({ status: "Your Message is Successfully Sent, Thank You!" })
            })
            .catch((error) => {
                console.log(error.response)
                this.setState({ status: error.response.data })
            });
    }

    render() {
        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Get In Touch</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>
                                {this.state.status && <div className="alert alert-warning text-center">{this.state.status}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm onValidSubmit={this.handleValidSubmit} id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <AvField type="text" name="name" className="form-control" placeholder="Your name..." required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <AvField type="email" name="email" className="form-control" placeholder="Your email..." required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <AvField type="text" name="subject" className="form-control" placeholder="Your Subject.." required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <AvField type="textarea" name="message" id="comments" rows="4" className="form-control" placeholder="Your message..." required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                            </div>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ContatUs;