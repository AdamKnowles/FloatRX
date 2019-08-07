import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
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
    console.log("Add Note Form");
    console.log(this.props.notes)
    return (
      
      <section className="medication">
      <Button color="danger" onClick={this.toggle}>View Notes</Button>
      {
        <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}>
                  <div key={this.props.notes.id} className="card">
          <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#8E8F9C", borderColor: "#8E8F9C" }}
            ><h3 color="secondary">Notes</h3>
              
              <AddNoteModal {...this.props} />
                
                <div>
                {this.props.notes.filter(
                note =>
                  note.medicationId === this.props.medication.medicationId).
              map( note =>(<React.Fragment><CardBody className="text-dark card card-body border border-dark " body
              inverse
              style={{ backgroundColor: "#93E9BE", borderColor: "#93E9BE" }}><div ><h6>{note.note}</h6><NoteEditFormModal toggle={this.toggle} editNewNote={this.props.editNewNote} notes={this.props.notes} note={note} {...this.props} /> <Button color="danger" size="sm" onClick={() =>this.props.deleteNoteFromProfile(note.id)}>
                    Delete
                  </Button></div></CardBody></React.Fragment>))}</div>
                   
                  <Button  onClick={this.toggle} className="btn btn-primary">
                    cancel
                  </Button>
                
                
              
            </Card>
            </div>
        </Modal>
        }
            </section>
        
      
    );
  }
}
