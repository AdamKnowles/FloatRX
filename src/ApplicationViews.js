import React, { Component } from "react";
import MedicationList from "./components/medications/MedicationList";
import UserProfile from "./components/UserProfile/UserProfile";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import APImanager from "./modules/APImanager";
import MedicationCard from "./components/medications/MedicationCard";

class ApplicationViews extends Component {
  state = {
    medications: [],
    users: []
  };

  componentDidMount() {
    const newState = {};
    this.getMeds().then(
        medications =>
        (newState.medications = medications)
    )
      .then(() => this.setState(newState));
  }

  getMeds = () => {
    return APImanager.getAll("unitMedications?unitId=3&_expand=medication");
  };

  

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/medicationlist"
          render={props => {
            return (
              <MedicationList
              medications={this.state.medications}
                // transplantMedications={this.state.transplantMedications}
              />
            );
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <UserProfile {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
