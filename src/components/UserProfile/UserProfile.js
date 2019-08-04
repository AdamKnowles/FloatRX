import React, { Component } from "react";
import { withRouter } from "react-router";
import MedicationCard from "../medications/MedicationCard";
import UserProfileMedCard from "./UserProfileMedCard";
import { Button } from "reactstrap";
class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 body className="text-center">
          User Profile
        </h2>

        <Button
          body
          className="text-center"
          type="button"
          onClick={() => this.props.history.push("/medicationlist")}
        >
          Add Medication
        </Button>
        <Button className="text-right" onClick={this.props.logout}>
          Logout
        </Button>

        <div>
          {this.props.userProfile.map(medication => (
            <UserProfileMedCard
              key={medication.id}
              medication={medication}
              deleteMedFromProfile={this.props.deleteMedFromProfile}
              {...this.props}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(UserProfile);
