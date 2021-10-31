import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './navbar.css'
import Slider from './Slider';
const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log('user', user);
    console.log(user.photoURL)

    return (
        <div className="navstyle">
            <div className="nav-menu">
                      <div> 
                          <h1 className="navbar-brand">AMRA_FAST.com</h1>
                      </div>
                      <div>
                        <img style={{ width: '50px', borderRadius: '50%', marginRight: '30px', }} src={user.photoURL} alt="" />
                          {user.email ?
                        <Link to="/login">
                            <small className="text-white">{user.displayName}</small>
                            <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                        </Link>
                        :
                        <Link to="/login">
                            <button className="btn btn-warning me-2" >Log In</button>
                        </Link>

                          }
                      </div>
                       
                     </div>
                      
        </div>
          
    );
};

export default Navbar;