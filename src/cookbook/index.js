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

import authReducer from "./reducers/auth-reducer"
import {Provider} from "react-redux";
import RegisterComponent from "./register-component";
import CreateRecipe from "./create-recipe-component";
import recipeReducer from "./reducers/recipe-reducer";
import ViewRecipe from "./view-recipe-component";
import AnonymousProfileScreen from "./anonymous-profile-component";
import bookmarkReducer from "./reducers/bookmark-reducer";
import SearchResults from "./search-results-component";
import ViewRemoteRecipe from "./view-remote-recipes";
import ContactList from "./contact-list-component";

const store = configureStore(
    {reducer: {user: authReducer, recipeData: recipeReducer, bookmarkData: bookmarkReducer}});

function Cookbook() {
    return(
        <Provider store={store}>
                <div className="row gx-4">
                        <Navbar/>
                    <div className="row gx-4">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="login"
                                   element={<LoginScreen />} />
                            <Route path="profile"
                                   element={<ProfileScreen />} />
                            <Route path="register" element={<RegisterComponent/>} />
                            <Route path="createrecipe" element={<CreateRecipe/>}/>
                            <Route path="recipe/:rid" element={<ViewRecipe/>}/>
                            <Route path ="remoteRecipe/:searchTerm/:rid" element={<ViewRemoteRecipe/>}></Route>
                            <Route path="profile/:username" element={<AnonymousProfileScreen/>}/>
                            <Route path="search/:searchTerm" element={<SearchResults/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="contactList" element={<ContactList/>}/>
                        </Routes>
                    </div>
                </div>
        </Provider>
    );
}
export default Cookbook
