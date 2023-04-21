import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useLocation, useNavigate} from "react-router";
import { Button } from "react-bootstrap";
import {logoutThunk} from "../services/auth-thunks";
import './index.css';


const NavBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const paths = pathname.split('/');
    const active = paths[1];
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand my-2 mx-4">Online Cookbook</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className={`nav-item ${active === ''?'active':''}`}>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    {!currentUser &&  <li className={`nav-item ${active === 'login'?'active':''}`}>
                        <Link to="/login" className="nav-link">
                                Login
                        </Link>
                    </li>}
                    {!currentUser && <li className={`nav-item ${active === 'register'?'active':''}`}>
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>
                    </li>}
                    {currentUser  && <li className={`nav-item ${active === 'profile'?'active':''}`}>
                        <Link to="/profile" className="nav-link">
                            Profile
                        </Link>
                    </li>}
                    {(currentUser && currentUser?.isAuthor) && <li className={`nav-item ${active === 'createrecipe'?'active':''}`}>
                        <Link to="/createrecipe" className="nav-link">
                            Create Recipe
                        </Link>
                    </li>}
                    <li className={`nav-item ${active === 'about'?'active':''}`}>
                        <Link to="about" className="nav-link">
                            About
                        </Link>
                    </li>

            {(currentUser) && <Button className={`nav-item`} variant="secondary" onClick={() => {
                dispatch(logoutThunk());
                navigate("/");
            }}>
                Logout
            </Button>}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
