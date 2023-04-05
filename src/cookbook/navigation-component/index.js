import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <div className="list-group-item">Online Cookbook</div>
            <Link to="/cookbook/" className={`list-group-item ${active === ''?'active':''}`}>
                Home
            </Link>
            <a href="/#" className={`list-group-item
                    ${active === 'login'?'active':''}`}>
                Login
            </a>
            <a href="/#" className={`list-group-item
                    ${active === 'about'?'active':''}`}>
                About
            </a>
            <Link to="/cookbook/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <a href="/#" className={`list-group-item
                    ${active === 'contact'?'active':''}`}>
                Contact
            </a>
        </div>
    );
};
export default NavBar;