import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from './FooterQuickLinks';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#010041' }} className=" py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                        <p className="ms-2 fw-bolder">Dhaka, Bangladesh</p> <br />
                        <br />
                        
                    </div>
                    <div className="col-md-4 ">
                        <h4>Social Midea</h4>
                        <div>
                            <FooterQuickLinks></FooterQuickLinks>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Oppos!</p>
                        <small>Copyright: amra-fast.com</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;