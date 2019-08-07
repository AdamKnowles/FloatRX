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
          note: "",
          medicationId: ""
          
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
          medicationId:this.props.note.medicationId,
          note: this.state.note,
          id: this.props.note.id
        };
        console.log(note)
    
        this.props.editNewNote(note)
        this.state.modal=false
    }
    componentDidMount() {
        
        APImanager.get("notes", this.props.note.id).then(note => {
          this.setState({
            id:note.id,
            note:note.note
            
          });
        });
      }
    
    
    render() {
        console.log(this.props.note.id)
        return (
            <React.Fragment>
            <div>
                <Button color="primary" size="sm" onClick={this.toggle}>Edit</Button>
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
                      <h2 className="p-1 mb-4 bg-secondary text-white">Edit Note </h2>
                  <h1>
                      <u>{this.props.medication.name}</u>
                    </h1>
                    <h4>{this.props.medication.class}</h4>
                    
                    <textarea
              onChange={this.handleFieldChange}
              type="text"
              id="note"
              value={this.state.note}
              required
              autoFocus=""
              className="form-control mb-2"
              rows="8"
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
