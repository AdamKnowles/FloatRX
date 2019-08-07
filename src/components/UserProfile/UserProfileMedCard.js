import React, { Component } from "react";
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import AddNoteToProfileModal from "./AddNoteToProfileModal";
import "./userProfile.css"

export default class UserProfileMedCard extends Component {
  

  render() {
    return (
      <section className="medication">
        {
          <div key={this.props.medication.id} className="">
            
            <Card
              body
              className="text-center card-body border border-dark"
              body
              inverse
              style={{ backgroundColor: "#CADEDF", borderColor: "#0C2D48" }}
            >
              <CardBody className="text-dark ">
                <h1>
                  <u>{this.props.medication.name}</u>
                </h1>
                <h4>{this.props.medication.class}</h4>
                <h6>Route: {this.props.medication.route}</h6>
                <h6>Dosage: {this.props.medication.dosage}</h6>
                <h6>Indication: {this.props.medication.indications}</h6>
                <h6>Mechanism of Action: {this.props.medication.mechanism}</h6>
                <h6 />
                <div className="bothButtons">
                <Button
                  className="mr-2"
                  onClick={() =>
                    this.props.deleteMedFromProfile(this.props.medication.id)
                  }
                  color="warning"
                >
                  Remove Medication
                </Button>
                
                
                  <AddNoteToProfileModal toggle={this.props.toggle} notes={this.props.notes} deleteNoteFromProfile={this.props.deleteNoteFromProfile} editNewNote={this.props.editNewNote} {...this.props} />
                  </div>
              </CardBody>
            </Card>
          </div>
        }
      </section>
    );
  }
}
