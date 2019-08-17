import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter, Collapse } from "reactstrap";
import AddNoteToProfileModal from "./AddNoteToProfileModal";
import "./userProfile.css"
import AddNoteProcedureToProfile from "./addNoteProcedureToProfile"

export default class UserProfileProcedureCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  

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
              <CardBody className="text-dark ">
                <h1>
                  <u>{this.props.procedure.procedure.name}</u>
                </h1>
                <Collapse isOpen={this.state.collapse}>
                
                <h6>Indications: {this.props.procedure.procedure.indications}</h6>
                <h6>Method: {this.props.procedure.procedure.method}</h6>
                <h6>Complications: {this.props.procedure.procedure.complications}</h6>
                </Collapse>
                
                <div className="bothButtons">
                <Button onClick={() =>this.props.deleteProcedureFromProfile(this.props.procedure.id)}
                  className="mr-2"
                  
                  
                  color="warning"
                >
                  Remove Procedure
                </Button>
                <Button className="mr-2" color="primary" onClick={this.toggle}>More Info</Button>
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
