import React, { Component } from 'react'
import { Button } from "reactstrap";

export default class AdminDeleteButton extends Component {
    isAuthenticated = () => sessionStorage.getItem("userId") !== null;
  adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
    render() {
        if(this.isAuthenticated() & this.adminAuthenticated()){
        return (
            <div>
                <Button color="success"  className="mr-2" onClick={() =>this.props.deleteAdminProcedure(this.props.procedure.procedure.id)}>Delete</Button>
                
            </div>
        )
    }
    else{
        return null
    }
}
}