import React, { Component } from 'react'
import { Button } from "reactstrap";

export default class AdminButton extends Component {
    isAuthenticated = () => sessionStorage.getItem("userId") !== null;
  adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
    render() {
        if(this.isAuthenticated() & this.adminAuthenticated()){
        return (
            <div>
                <Button color="success"  onClick={() =>this.props.deleteAdminMed(this.props.medication.medication.id)}>Delete</Button>
                
            </div>
        )
    }
    else{
        return null
    }
}
}
