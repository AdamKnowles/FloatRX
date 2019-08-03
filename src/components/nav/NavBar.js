import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"



export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-medium d-flex justify-content-center p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/medicationlist">Medication List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">User Profile</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        )
    }
}
