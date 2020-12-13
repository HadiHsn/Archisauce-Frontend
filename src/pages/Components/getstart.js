
import React, { Component } from 'react';

class GetStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg-getstared">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <p className="padding-t-10"></p>
                                <h1 className="get-started-title text-white">Let's Get Started</h1>
                                <div className="section-title-border bg-white"></div>
                                <p className="section-subtitle font-secondary text-white text-center padding-t-30">Archisauce will service the designer all the data needed to create the conceptual diagram that will help him to build trust with customers, in addition to the confidential agreement between both parties related to all needs required in the project.</p>
                                <a href="#servicesapply" className="btn btn-bg-white waves-effect">Get Started<i className="mdi mdi-arrow-right"></i></a>
                                <p className="padding-t-10"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default GetStart;