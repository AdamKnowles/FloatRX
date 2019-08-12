import React, { Component } from 'react'
import { Card, CardBody, Button, Modal, ModalFooter } from "reactstrap";
import ProcedureListModal from "./ProcedureListModal"
import "../../index.css"

export default class ProcedureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
      name: this.props.procedure.name,
      indications: this.props.procedure.indications,
      method: this.props.procedure.method,
      complications: this.props.procedure.complications,
      procedureId: this.props.procedure.id,
      modal: false
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
      name: this.state.name,
      indications: this.state.indications,
      method: this.state.method,
      complications: this.state.complications,
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
          <div key={this.props.procedure.id} className="">
            
            <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#9CA89E", borderColor: "#9CA89E" }}
            >
              <CardBody className="#8fbc8f">
                <h1 onClick={this.toggle}>
                  <u>{this.props.procedure.name}</u>
                </h1>
                
              <ProcedureListModal  procedures={ this.props.procedures} procedure={this.props.procedure} toggle={this.toggle} addNewProcedure={this.addNewProcedure}  />
                <Button color="danger" body className="text-center" onClick={this.addNewProcedure}>
                  Add to Profile
                </Button>
              </CardBody>
            </Card>
          </div>
        }
      </section>
        )
    }
}
