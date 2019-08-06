import React, { Component } from 'react'
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import APImanager from "../../modules/APImanager"

export default class NoteEditFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: sessionStorage.getItem("userId"),
          modal: false,
          id: "",
          note: ""
          
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal,
           
        }));
      }

      handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
      }
      editNote = evt => {
        evt.preventDefault();
        const note = {
          userId: this.state.userId,
          note: this.state.note,
          id: 7
        };
    
        this.props.editNewNote(note)
        this.state.modal=false
    }
    
    
    render() {
        return (
            <React.Fragment>
            <div>
                <Button onClick={this.toggle}>Edit</Button>
            </div>
            <div>
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
                    
                    <input
              onChange={this.handleFieldChange}
              type="textarea"
              id="note"
              placeholder="Edit Note"
              required
              autoFocus=""
              className="form-control mb-2"
            />
                  </CardBody>
                </Card>

                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={this.toggle} onClick={this.editNote}
                    
                    
                  >
                    Save 
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
                
            </div>
            </React.Fragment>
        )
    }
}
