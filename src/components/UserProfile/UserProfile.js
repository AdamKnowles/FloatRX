import React, { Component } from "react";
import { withRouter } from "react-router";
import MedicationCard from "../medications/MedicationCard";
import UserProfileMedCard from "./UserProfileMedCard";
import { Button } from "reactstrap";
class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <h2 body className="text-center p-1 mb-4 bg-secondary text-white mt-5">
          User Profile
        </h2>

        <div className="d-flex justify-content-center"><Button
          
           
          type="button" color="success"
          onClick={() => this.props.history.push("/medicationlist")}
        >
          Add Medication
        </Button>
        </div>

        <div>
          {this.props.userProfile.map(medication => (
            <UserProfileMedCard
              key={medication.id}
              medication={medication}
              deleteMedFromProfile={this.props.deleteMedFromProfile}
              addNote={this.props.addNote}
              notes={this.props.notes}
              toggle={this.props.toggle}
              deleteNoteFromProfile={this.props.deleteNoteFromProfile}
              editNewNote={this.props.editNewNote}
              {...this.props}
            />
          ))}
        </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(UserProfile);
