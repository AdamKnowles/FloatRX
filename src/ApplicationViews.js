import React, { Component } from "react";
import MedicationList from "./components/medications/MedicationList";
import UserProfile from "./components/UserProfile/UserProfile";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import APImanager from "./modules/APImanager";
import MedicationCard from "./components/medications/MedicationCard";
import NavBar from "./components/nav/NavBar"
import Admin from "./components/Admin/Admin"
import ProcedureList from "./components/procedures/ProcedureList"

import Login from "./components/Login/login";

class ApplicationViews extends Component {
  state = {
    medications: [],
    users: [],
    units: [],
    userProfile: [],
    userProfileProcedure:[],
    procedures: [],
    notes:[],
    unitParam: ""
  };
  componentDidMount() {
    const newState = {}
    let currentUserId = sessionStorage.getItem("userId");
    APImanager.getAllUnitMedications().then(
      medications => (newState.medications = medications))
      APImanager.getAll("unit").then(units => (newState.units = units));
      APImanager.getAll("procedures").then(procedures => (newState.procedures = procedures));
      APImanager.getUserMeds("userProfile", currentUserId)
      .then(userProfile => (newState.userProfile = userProfile))
      APImanager.getUserMeds("userProfileProcedure", currentUserId)
      .then(userProfileProcedure => (newState.userProfileProcedure = userProfileProcedure))
      APImanager.getUserNotes("notes", currentUserId)
      .then(notes => (newState.notes = notes))
      .then(() => this.setState(newState));
      
    }
  
 


  getUnitMeds = id => {
    return APImanager.getUnitMedications(id);
  };
  getAllUnitMeds = () => {
    return APImanager.getAllUnitMedications();
  };
  showAllMeds = () => {
   this.setState({unitParam: ""})
  }

  getProcedures = () => {
    APImanager.getAll("procedures")
  }
  

  logout = () => {
    sessionStorage.clear()
    this.state.unitParam = ""
    this.props.history.push("/");
    
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
  addProcedureToProfile = procedure => {
    let currentUserId = sessionStorage.getItem("userId");
    return APImanager.post("userProfileProcedure", procedure)
      .then(() => APImanager.getUserProcedures("userProfileProcedure", currentUserId))
      .then(procedure =>
        this.setState({
          userProfileProcedure: procedure
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
        this.setState({ userProfile: medication });
      });
  };
  deleteNoteFromProfile = id => {
    let currentUserId = sessionStorage.getItem("userId");
    return APImanager.delete("notes", id)
      .then(() => APImanager.getUserNotes("notes", currentUserId))
      .then(note => {
        this.setState({ notes: note });
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

  editNewNote = (editedEventObject) => {
    let currentUserId = sessionStorage.getItem("userId");
    return APImanager.put("notes", editedEventObject)
      .then(() => APImanager.getUserNotes("notes", currentUserId))
      .then(note => {

        this.setState({ notes: note });
      });
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
  adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
  

  render() {
    return (
      <React.Fragment>
        <NavBar logout={this.logout} {...this.props} />
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
                showAllMeds={this.showAllMeds}
                
                
                
                
                
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
          path="/procedures"
          render={props => {
            if(this.isAuthenticated()){
            return (
              <ProcedureList procedures={this.state.procedures} addProcedureToProfile={this.addProcedureToProfile}
                
                
                
                
                
                
                {...props}
                
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
                userProfileProcedure={this.state.userProfileProcedure}
                addProcedureToProfile={this.addProcedureToProfile}
                
                units={this.state.units}
                deleteMedFromProfile={this.deleteMedFromProfile}
                logout={this.logout}
                addNote={this.addNote}
                notes={this.state.notes}
                deleteNoteFromProfile={this.deleteNoteFromProfile}
                editNewNote={this.editNewNote}
                {...props}
              />
            );}
            else {
              return <Redirect to="/" />
          }}}
        />
        <Route
          exact
          path="/admin"
          render={props => {
            if(this.isAuthenticated() & this.adminAuthenticated()){
            return (
              <Admin />
            );}
            else if(this.isAuthenticated()){
              return <React.Fragment> <br></br><br></br><h3 className="text-center">You do not have Administrator Privileges</h3></React.Fragment>
                
                
              
            
            }
            else {
              return <Redirect to="/" />
          }}}
        />
        
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
