import React from 'react';
import logo from '../../images/housekeeping-1-scaled.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="heder d-flex justify-content-center align-items-center">
            <img src={logo} alt="" srcset="" />
            <h1 className="text-primary"><span className="text-danger">Welcome</span><br /> perfessional <br />
                carpet cleaning<br /> service</h1>
        </div>
    );
};

export default Header;