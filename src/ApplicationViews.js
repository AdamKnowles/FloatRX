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
    users: [],
    units:[],
    userProfile:[],
    unitParam: "1"

  }

  

  componentDidMount() {
    const newState = {};
    
    
    
    this.getAllUnitMeds().then(
        medications =>
        (newState.medications = medications)
    )
    APImanager.getAll("unit")
      .then(units => (newState.units = units))
    APImanager.getAll("userProfile")
      .then(userProfile => (newState.userProfile = userProfile))
    .then(() => this.setState(newState));
    
    
  }

  getUnitMeds = (id) => {
    return APImanager.getUnitMedications(id);
  };
  getAllUnitMeds = () => {
    return APImanager.getAllUnitMedications();
  }

  searchParam = (unitId) => {
      this.setState({unitParam: unitId})
  }

  addMedicationToProfile = medication => {
    return APImanager.post("userProfile", medication)
      .then(() => APImanager.getAll("userProfile"))
      .then(medication =>
        this.setState({
          userProfile: medication
        })
      );
  }

  

  render() {
    
    return (
      <React.Fragment>
        <Route
          exact
          path="/medicationlist"
          render={props => {
            return (
              <MedicationList
              medications={this.state.medications} units={this.state.units} unitParam={this.state.unitParam} addMedicationToProfile={this.addMedicationToProfile} searchParam={this.searchParam}{...props}
                // transplantMedications={this.state.transplantMedications}
              />
            );
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <UserProfile userProfile={this.state.userProfile} units={this.state.units} {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
