import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

export default class AddNoteToProfile extends Component {
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
      modal: !prevState.modal
    }));
  }



  

  render() {
    console.log("Add Note Form");
    console.log(this.props.notes)
    return (
      
        <section className="medication">
        
        {
          <div key={this.props.notes.id} className="card">
          <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#CADEDF", borderColor: "#0C2D48" }}
            >
              <CardBody className="text-dark">
                
                
                <h6>Note: {this.props.note.note}</h6>
                
                
              </CardBody>
            </Card>
            </div>
        }
            </section>
      
    );
  }
}
