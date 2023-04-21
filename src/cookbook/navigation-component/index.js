import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useLocation, useNavigate} from "react-router";
import { Button } from "react-bootstrap";
import {logoutThunk} from "../services/auth-thunks";


const NavBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const paths = pathname.split('/');
    const active = paths[1];
    return (
        <div className="list-group">
            <div className="list-group-item">Online Cookbook</div>
            <Link to="/" className={`list-group-item ${active === ''?'active':''}`}>
                Home
            </Link>

            {!currentUser && <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
                Login
            </Link>}

            {!currentUser && <Link to="/register" className={`list-group-item ${active === 'register'?'active':''}`}>
                Register
            </Link>}

            {currentUser  && <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </Link>}

            {(currentUser && currentUser?.isAuthor) && <Link to="/createrecipe" className={`list-group-item ${active === 'createrecipe'?'active':''}`}>
                Create Recipe
            </Link>}

            <Link to="about" className={`list-group-item ${active === 'about'?'active':''}`}>
                About
            </Link>
            {(currentUser) && <Button className={`list-group-item`} variant="secondary" onClick={() => {
                dispatch(logoutThunk());
                navigate("/");
            }}>
                Logout
            </Button>}
        </div>
    );
};
export default NavBar;