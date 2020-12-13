import React, { Component } from 'react';

class FooterAlt extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0 text-orange">{new Date().getFullYear()} © Archisauce - Park Innovation</p>
                                </div>
                                <div className="float-right pull-none ">
                                    <ul className="list-inline social m-0">
                                        <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCrUSLWHnjE0mESyKhPwzLrg" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="mdi mdi-youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.facebook.com/archisauce/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/archi_sauce/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="mdi mdi-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default FooterAlt;