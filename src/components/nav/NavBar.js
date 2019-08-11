import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Admin from "../Admin/Admin"



export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar navbar-dark bg-dark d-flex justify-content-start p-0 fixed-top  " >
                
                <div className="d-flex justify-content-end"><h4 className="text-white">FloatRX</h4>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-3" to="/medicationlist" >Medication List</Link>
                    </li>
                    <li className="">
                        <Link className="nav-link text-white " to="/profile">User Profile</Link>
                    </li>
                    <li className="logout">
                        <Link className="nav-link text-white ml-3" to="/admin" >Admin</Link>
                    </li>
                    <Button  onClick={this.props.logout}>
          Logout
        </Button>
                    
                    
                </ul>
                </div>
                
            </nav>
        )
    }
}
