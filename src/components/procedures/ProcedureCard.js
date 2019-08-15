import React, { Component } from 'react'
import { Card, CardBody, Button, Modal, ModalFooter } from "reactstrap";
import ProcedureListModal from "./ProcedureListModal"
import AdminDeleteButton from "./AdminDeleteButton"
import "../../index.css"
import EditAdminProcedure from './EditAdminProcedure';

export default class ProcedureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
      procedureId: this.props.procedure.procedure.id,
      modal: false,
     
        };
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      } 

      addNewProcedure = evt => {
        evt.preventDefault();
        
        
        const procedure = {
      procedureId: this.state.procedureId,
      userId: Number(sessionStorage.getItem("userId"))
        };
    
        this.props
          .addProcedureToProfile(procedure)
          .then(() => this.props.history.push("/profile"));
    }
    render() {
        return (
            <section className="procedures">
        {
          <div key={this.props.procedure.procedure.id} className="">
            
            <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#9CA89E", borderColor: "#9CA89E" }}
            >
              <CardBody className="#8fbc8f">
                <h1 onClick={this.toggle}>
                  <u>{this.props.procedure.procedure.name}</u>
                </h1>
                <h4>Procedure</h4>
                <div className="procedureBtn"><EditAdminProcedure editAdminProcedure={this.props.editAdminProcedure} {...this.props} />
                <AdminDeleteButton deleteAdminProcedure={this.props.deleteAdminProcedure} {...this.props} />
                
              <ProcedureListModal  procedures={ this.props.procedures} procedure={this.props.procedure} toggle={this.toggle} addNewProcedure={this.addNewProcedure}  />
                <Button  color="danger" body className="text-center" onClick={this.addNewProcedure} >
                  Add to Profile
                </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        }
      </section>
        )
    }
}
