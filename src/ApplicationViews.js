import React, { Component } from "react";
import MedicationList from "./components/medications/MedicationList";
import UserProfile from "./components/UserProfile/UserProfile";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import APImanager from "./modules/APImanager";
import MedicationCard from "./components/medications/MedicationCard";

class ApplicationViews extends Component {
  state = {
    transplantMedications: [],
    oncologyMedications: [],
    users: []
  };

  componentDidMount() {
    const newState = {};
    this.getTransplantMeds().then(
      transplantMedications =>
        (newState.transplantMedications = transplantMedications)
    )
    this.getOncologyMeds()
      .then(
        oncologyMedications =>
          (newState.oncologyMedications = oncologyMedications)
      )
      .then(() => this.setState(newState));
  }

  getTransplantMeds = () => {
    return APImanager.getAll("transplantMedications");
  };

  getOncologyMeds = () => {
    return APImanager.getAll("oncologyMedications");
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
                oncologyMedications={this.state.oncologyMedications}
                transplantMedications={this.state.transplantMedications}
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
