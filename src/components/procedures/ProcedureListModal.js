import React, { Component } from 'react'
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

export default class ProcedureListModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          modal: false
        };
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      
    render() {
        return (
            <React.Fragment>
            <Button color="primary" className ="mr-2" onClick ={this.toggle}>More Info</Button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
                size="lg"
              >
                {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
                <Card
                  body
                  className="text-center "
                  body
                  inverse
                  style={{
                    backgroundColor: "#93E9BE",
                    borderColor: "#93E9BE",
                    color: "#93E9BE"
                  }}
                >
                  <CardBody className="text-dark ">
                    <h1>
                      <u>{this.props.procedure.procedure.name}</u>
                    </h1>
                    <h6>Indications: {this.props.procedure.procedure.indications}</h6>
                    <h6>Method: {this.props.procedure.procedure.method}</h6>
                    <h6>Complications: {this.props.procedure.procedure.complications}</h6>
                    
                  </CardBody>
                </Card>

                <ModalFooter>
                  <Button
                    color="danger"
                    onClick={this.toggle} onClick={this.props.addNewProcedure}
                    
                  >
                    Add To Profile
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
              </React.Fragment>
        )
    }
}
