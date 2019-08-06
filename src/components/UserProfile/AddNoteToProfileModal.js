import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import NoteEditFormModal from "./NoteEditFormModal";

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
      <Button onClick={this.toggle}>View Notes</Button>
      {
          <div key={this.props.notes.id} className="card">
          <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}>
          <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#CADEDF", borderColor: "#0C2D48" }}
            ><h3 color="secondary">Notes</h3>
              <CardBody className="text-dark card">
                
                <div>
                {this.props.notes.map( note =>(<React.Fragment><div className="card-body border border-dark"><h4>{note.note}</h4><NoteEditFormModal toggle={this.toggle} editNewNote={this.props.editNewNote} notes={this.props.notes} {...this.props} /> <Button onClick={() =>this.props.deleteNoteFromProfile(note.id)} color="secondary">
                    Delete
                  </Button></div></React.Fragment>))}</div>
                  <Button onClick={this.toggle} className="btn">
                    cancel
                  </Button>
                
                
              </CardBody>
            </Card>
        </Modal>
            </div>
        }
            </section>
        
      
    );
  }
}
