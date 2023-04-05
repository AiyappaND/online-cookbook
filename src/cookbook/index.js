import React from "react";
import {Routes, Route} from "react-router";

import Home from './home-component'
import Navbar from './navigation-component'
import Profile from './profile-component'

function Cookbook() {
    return(
        <div className="container mt-1">
            <div className="row gx-4">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                    <Navbar/>
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">
                    <Routes>
                        <Route path="/"    element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Cookbook