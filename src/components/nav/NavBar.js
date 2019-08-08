import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"



export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-medium d-flex justify-content-start p-0 shadow">
                <div className="d-flex justify-content-end"><h4>FloatRX</h4>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/medicationlist">Medication List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">User Profile</Link>
                    </li>
                    
                    
                </ul>
                </div>
            </nav>
        )
    }
}
