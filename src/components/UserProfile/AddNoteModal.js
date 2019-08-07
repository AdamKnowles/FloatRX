import React, { Component } from 'react'
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

export default class AddNoteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          id: "",
          medicationId:this.props.medication.medicationId,
          note: ""
          
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    
      
    
      handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
      };
      addNewNoteToDatabase = evt => {
        evt.preventDefault();
        console.log("New note added");
        
        const note = {
          note:this.state.note,
          medicationId: this.state.medicationId,
          userId: Number(sessionStorage.getItem("userId"))
        };
    
        this.props
          .addNote(note)
          this.state.modal=false
      }
    render() {
        return (
            <div>
                <Button color="primary" block  onClick={this.toggle} >
                    Add Note
                  </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
                <Card
                  body
                  className="text-center"
                  body
                  inverse
                  style={{
                    backgroundColor: "#93E9BE",
                    borderColor: "#93E9BE",
                    color: "#93E9BE"
                  }}
                >
                  <CardBody className="text-dark">
                      <h1>Add Note</h1>
                    <h1>
                      <u>{this.props.medication.name}</u>
                    </h1>
                    <h4>{this.props.medication.class}</h4>
                    <input
              onChange={this.handleFieldChange}
              type="text"
              id="note"
              placeholder="Add Note"
              required
              autoFocus=""
              className="form-control mb-2"
            />
                  </CardBody>
                </Card>

                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={this.toggle}
                    onClick={this.addNewNoteToDatabase}
                    
                  >
                    Save
                  </Button>
                  <Button className="btn btn-primary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
                
            </div>
        )
    }
}
