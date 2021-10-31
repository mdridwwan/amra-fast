import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterQuickLinks = () => {
    return (

        <ul className="list-unstyled">
            <li>
                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                    <FontAwesomeIcon icon={faAddressBook} /> <span>Twiter</span>
                </Link>
            </li>
            <li>
                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                    <FontAwesomeIcon icon={faAddressBook} /> <span>FaceBook</span>
                </Link>
            </li>
            <li>
                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                    <FontAwesomeIcon icon={faAddressBook} /> <span>Instagram</span>
                </Link>
            </li>
            <li>
                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                    <FontAwesomeIcon icon={faAddressBook} /> <span>YouTube</span>
                </Link>
            </li>
        </ul>

    );
};

export default FooterQuickLinks;