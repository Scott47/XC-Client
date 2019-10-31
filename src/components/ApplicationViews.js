import { Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { withRouter, Redirect } from "react-router-dom"
import useSimpleAuth from "../ui/useSimpleAuth"
import Register from "./auth/Register"
import Login from "./auth/Login"
import Runner from "./runner/Runner"



const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth()

    return (
        <React.Fragment>

            {/* <Route
                exact path="/" render={props => {
                    return <HomePage {...props} />
                }}
            /> */}
            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />
            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />
            <Route
                exact path="/runners" render={props => {
                    if(isAuthenticated()) return (
                       <Runner {...props}  />
                    )
                    else return <Redirect to="/login" />
                }}
            />
        </React.Fragment>

    )
}

export default ApplicationViews
