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
    APImanager.getAll("transplantMedications").then(
      medications => (newState.medications = medications)
)
      .then(() => this.setState(newState))
      console.log(newState);
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/medicationlist"
          render={props => {
            return  <MedicationList medications={this.state.medications} />;
            
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <UserProfile />;
            
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
