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
        <h2 body className="text-center p-1 mb-4 bg-secondary text-white">
          User Profile
        </h2>

        <div><Button
          
           className="text-center"
          type="button" color="success"
          onClick={() => this.props.history.push("/medicationlist")}
        >
          Add Medication
        </Button>
        <Button className="float-right" onClick={this.props.logout}>
          Logout
        </Button></div>

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
