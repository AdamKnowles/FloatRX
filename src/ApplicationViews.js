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
    notes:[],
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
    let currentUserId = sessionStorage.getItem("userId");
    
    return APImanager.post("notes", note)
      .then(() => APImanager.getUserNotes("notes", currentUserId))
      .then(note =>
        this.setState({
          notes: note
          
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
    APImanager.getUserNotes("notes", currentUserId)
      .then(notes => {
        return (newState.notes = notes);
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
            if(this.isAuthenticated()){
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
            
            );}
            else {
              return <Redirect to="/" />
          }}}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            if(this.isAuthenticated()){
            return (
              <UserProfile
                userProfile={this.state.userProfile}
                units={this.state.units}
                deleteMedFromProfile={this.deleteMedFromProfile}
                logout={this.logout}
                addNote={this.addNote}
                {...props}
              />
            );}
            else {
              return <Redirect to="/" />
          }}}
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
