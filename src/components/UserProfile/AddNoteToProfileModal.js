import React, { Component } from "react";
import { Card, CardBody, CardFooter, Button,Modal, ModalFooter } from "reactstrap";
import NoteEditFormModal from "./NoteEditFormModal";
import AddNoteModal from "./AddNoteModal";

export default class AddNoteToProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
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



  

  render() {
    
    return (
      
      <section className="medication">
      <Button color="danger" onClick={this.toggle}>View Notes</Button>
      {
        <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className} size="lg">
                  <div key={this.props.notes.id} >
          <Card
              
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#93E9BE", borderColor: "#93E9BE" }}
            ><div className="text-dark"><h1>
            <u>{this.props.medication.name}</u>
          </h1>
          <h4>{this.props.medication.class}</h4></div>
              
              <AddNoteModal {...this.props} />
                
                <div>
                {this.props.notes.filter(
                note =>
                  note.medicationId === this.props.medication.medicationId).
              map( note =>(<React.Fragment><CardBody className="text-dark mt-4" 
              inverse
              style={{ backgroundColor: "#93E9BE", borderColor: "#FFF4EF" }}><div ><CardBody className="text-dark border border-dark" 
              inverse
              style={{ backgroundColor: "#FFF4EF", borderColor: "#FFF4EF" }}><h6 className="mt-0">{note.note}</h6></CardBody><div className="editDeleteButtons" > <NoteEditFormModal toggle={this.toggle} editNewNote={this.props.editNewNote} notes={this.props.notes} note={note} {...this.props} /> <Button color="danger" size="" onClick={() =>this.props.deleteNoteFromProfile(note.id)}>
                    Delete
                  </Button></div></div></CardBody></React.Fragment>))}</div>
                   
                  <Button  onClick={this.toggle} className=" btn mt-4">
                    Cancel
                  </Button>
                
                
              
            </Card>
            </div>
        </Modal>
        }
            </section>
        
      
    );
  }
}
