import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Admin from "../Admin/Admin"



export default class NavBar extends Component {
    render() {
        return (

           /* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h4 className="text-white">FloatRX</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-3" to="/medicationlist" >Medication List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-3" to="/procedures" >Procedure List</Link>
                    </li>
                    <li className="">
                        <Link className="nav-link text-white " to="/profile">User Profile</Link>
                    </li>
                    <li className="logout">
                        <Link className="nav-link text-white ml-3" to="/admin" >Administrator</Link>
                    </li>
                    
                    
                    
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <Button className="btn btn-outline-success my-2 my-sm-0"  onClick={this.props.logout}>
                        Logout
                    </Button>
                </div>
                </div>
                </nav>

*/




            <nav className="navbar navbar-dark bg-dark d-flex justify-content-start p-0 fixed-top  " >
                
                <div className="d-flex justify-content-end"><h4 className="text-white">FloatRX</h4>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-3" to="/medicationlist" >Medication List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-3" to="/procedures" >Procedure List</Link>
                    </li>
                    <li className="">
                        <Link className="nav-link text-white " to="/profile">User Profile</Link>
                    </li>
                    <li className="logout">
                        <Link className="nav-link text-white ml-3" to="/admin" >Administrator</Link>
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
