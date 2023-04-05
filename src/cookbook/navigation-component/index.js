import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];
    return (
        <div className="list-group">
            <div className="list-group-item">Online Cookbook</div>
            <Link to="/" className={`list-group-item ${active === ''?'active':''}`}>
                Home
            </Link>
            {/*TODO: Fix later after adding login*/}
            <a href="/" className={`list-group-item
                    ${active === 'login'?'active':''}`}>
                Login
            </a>
            <Link to="profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to="about" className={`list-group-item ${active === 'about'?'active':''}`}>
                About
            </Link>
        </div>
    );
};
export default NavBar;