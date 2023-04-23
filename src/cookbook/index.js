import React from "react";
import {Routes, Route} from "react-router";
import { configureStore }
    from '@reduxjs/toolkit';

import Home from './home-component'
import Navbar from './navigation-component'
import Profile from './profile-component'
import Contact from "./contact-component";
import About from "./about-component";
import LoginScreen from "./login-component";
import ProfileScreen from "./profile-component";
import ContactList from "./contact-list";
import authReducer from "./reducers/auth-reducer"
import {Provider} from "react-redux";
import RegisterComponent from "./register-component";
import CreateRecipe from "./create-recipe-component";
import recipeReducer from "./reducers/recipe-reducer";
import ViewRecipe from "./view-recipe-component";
import AnonymousProfileScreen from "./anonymous-profile-component";

const store = configureStore(
    {reducer: {user: authReducer, recipeData: recipeReducer}});

function Cookbook() {
    return(
        <Provider store={store}>
            <div className="container mt-1">
                <div className="row gx-4">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                        <Navbar/>
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="admin/contact-list" element={<ContactList/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="login" element={<LoginScreen />} />
                            <Route path="profile" element={<ProfileScreen />} />
                            <Route path="register" element={<RegisterComponent/>} />
                            <Route path="createrecipe" element={<CreateRecipe/>}/>
                            <Route path="recipe/:rid" element={<ViewRecipe/>}/>
                            <Route path="profile/:username" element={<AnonymousProfileScreen/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Cookbook