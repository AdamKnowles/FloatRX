import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import AddNoteToProfileModal from "./AddNoteToProfileModal";

export default class UserProfileMedCard extends Component {
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
      <section className="medication">
        {
          <div key={this.props.medication.id} className="card">
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
                    Save Note
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#CADEDF", borderColor: "#0C2D48" }}
            >
              <CardBody className="text-dark">
                <h1>
                  <u>{this.props.medication.name}</u>
                </h1>
                <h4>{this.props.medication.class}</h4>
                <h6>Route: {this.props.medication.route}</h6>
                <h6>Dosage: {this.props.medication.dosage}</h6>
                <h6>Indication: {this.props.medication.indications}</h6>
                <h6>Mechanism of Action: {this.props.medication.mechanism}</h6>
                <h6 />
                <Button
                  className="mr-2"
                  onClick={() =>
                    this.props.deleteMedFromProfile(this.props.medication.id)
                  }
                >
                  Remove Medication
                </Button>
                
                <Button color="secondary" onClick={this.toggle}>
                    Add Note
                  </Button>
                  <AddNoteToProfileModal toggle={this.props.toggle} notes={this.props.notes} deleteNoteFromProfile={this.props.deleteNoteFromProfile} editNewNote={this.props.editNewNote} {...this.props} />
              </CardBody>
            </Card>
          </div>
        }
      </section>
    );
  }
}
