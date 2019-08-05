import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

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
            >
              <CardBody className="text-dark">
                
                
                {this.props.notes.map( note =>(<h6>Note: {note.note}</h6>))}
                
                
              </CardBody>
            </Card>
        </Modal>
            </div>
        }
            </section>
        
      
    );
  }
}
