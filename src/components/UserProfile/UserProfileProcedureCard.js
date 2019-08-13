import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import AddNoteToProfileModal from "./AddNoteToProfileModal";
import "./userProfile.css"
import AddNoteProcedureToProfile from "./addNoteProcedureToProfile"

export default class UserProfileProcedureCard extends Component {
  

  render() {
    return (
      <section className="Procedure">
        {
          <div key={this.props.procedure.id} className="">
            
            <Card
              body
              className="text-center card-body border border-dark"
              body
              inverse
              style={{ backgroundColor: "#F08C4A", borderColor: "#F08C4A" }}
            >
              <CardBody className="text-light ">
                <h1>
                  <u>{this.props.procedure.procedure.name}</u>
                </h1>
                
                <h6>Indications: {this.props.procedure.procedure.indications}</h6>
                <h6>Method: {this.props.procedure.procedure.method}</h6>
                <h6>Complications: {this.props.procedure.procedure.complications}</h6>
                
                <div className="bothButtons">
                <Button onClick={() =>this.props.deleteProcedureFromProfile(this.props.procedure.id)}
                  className="mr-2"
                  
                  
                  color="warning"
                >
                  Remove Procedure
                </Button>
                <AddNoteProcedureToProfile procedures={this.props.procedures}  {...this.props} />
                
                
                  
                  </div>
              </CardBody>
            </Card>
          </div>
        }
      </section>
    );
  }
}
