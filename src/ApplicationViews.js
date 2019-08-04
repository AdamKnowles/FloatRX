import React, { Component } from "react";
import MedicationList from "./components/medications/MedicationList";
import UserProfile from "./components/UserProfile/UserProfile";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import APImanager from "./modules/APImanager";
import MedicationCard from "./components/medications/MedicationCard";
import AddNoteToProfile from "./components/UserProfile/AddNoteToProfile";
import Login from "./components/Login/login";

class ApplicationViews extends Component {
  state = {
    medications: [],
    users: [],
    units: [],
    userProfile: [],
    unitParam: "1"
  };
  componentDidMount() {
    let currentUserId = sessionStorage.getItem("userId");
    const newState = {};

    this.getAllUnitMeds().then(
      medications => (newState.medications = medications)
    );
    APImanager.getAll("unit").then(units => (newState.units = units));
    APImanager.getUserMeds("userProfile", currentUserId)
      .then(userProfile => (newState.userProfile = userProfile))
      .then(() => this.setState(newState));
  }
 


  getUnitMeds = id => {
    return APImanager.getUnitMedications(id);
  };
  getAllUnitMeds = () => {
    return APImanager.getAllUnitMedications();
  };

  logout = () => {
    console.log("hey");
    sessionStorage.clear();
    this.props.history.push("/");
    // window.location.reload()
  };

  searchParam = unitId => {
    this.setState({ unitParam: unitId });
  };

  addMedicationToProfile = medication => {
    let currentUserId = sessionStorage.getItem("userId");
    return APImanager.post("userProfile", medication)
      .then(() => APImanager.getUserMeds("userProfile", currentUserId))
      .then(medication =>
        this.setState({
          userProfile: medication
        })
      );
  };
  addNote = note => {
    return APImanager.post("comments", note)
      .then(() => APImanager.getAll("comments"))
      .then(note =>
        this.setState({
          comments: note
        })
      );
  };

  deleteMedFromProfile = id => {
    let currentUserId = sessionStorage.getItem("userId");
    return APImanager.delete("userProfile", id)
      .then(() => APImanager.getUserMeds("userProfile", currentUserId))
      .then(medication => {
        // this.props.history.push("/events");
        this.setState({ userProfile: medication });
      });
  };
  userData = currentUserId => {
    const newState = {};
    APImanager.getUserMeds("userProfile", currentUserId)
      .then(medications => {
        return (newState.userProfile = medications);
      })
      .then(() => this.setState(newState));
      
  };

  register = user => {
    return APImanager.post("users", user)
      .then(() => APImanager.getAll("users"))
      .then(users =>
        this.setState({
          users: users
        })
      );
  };

  login = () => {
    this.setState({
      userId: sessionStorage.getItem("userId")
    });
    this.userData(this.state.userId)
  };

  isAuthenticated = () => sessionStorage.getItem("userId") !== null;
  

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Login
                {...props}
                users={this.state.users}
                login={this.login}
                register={this.register}
                userData={this.userData}
              />
            );
          }}
        />
        <Route
          exact
          path="/medicationlist"
          render={props => {
            return (
              <MedicationList
                medications={this.state.medications}
                units={this.state.units}
                unitParam={this.state.unitParam}
                addMedicationToProfile={this.addMedicationToProfile}
                searchParam={this.searchParam}
                logout={this.logout}
                
                {...props}
                // transplantMedications={this.state.transplantMedications}
              />
            );
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return (
              <UserProfile
                userProfile={this.state.userProfile}
                units={this.state.units}
                deleteMedFromProfile={this.deleteMedFromProfile}
                logout={this.logout}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/profile/addNoteForm"
          render={props => {
            return (
              <AddNoteToProfile
                userProfile={this.state.userProfile}
                addNote={this.addNote}
                {...props}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
