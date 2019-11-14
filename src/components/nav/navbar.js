import React from "react"
import { Link } from "react-router-dom"
import xclogo from "../xclogo.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import useSimpleAuth from "../../ui/useSimpleAuth"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()

    return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow navbar1">
            <ul className="nav nav-pills nav-fill">
            <img class="logo" src={xclogo} height="50px" width="50px" alt="XC COACH"/>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/runners">Runners</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/meets">Meets</Link>
                </li>
                {
                    isAuthenticated() ?
                    <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/reports">Reports</Link>
                    </li>
                        <li className="nav-item">
                            <Link className="nav-link fakeLink logout-link"
                                onClick={() => {
                                    logout()
                                    props.history.push({
                                        pathname: "/"
                                    })
                                }
                                }
                            >Logout</Link>
                        </li>
                        </> :
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        </>
                }
            </ul>
        </nav>
    )
}

export default NavBar