import React, { Component } from "react";
import { withRouter } from "react-router";
import MedicationCard from "../medications/MedicationCard";
import UserProfileMedCard from "./UserProfileMedCard";
import UserProfileProcedureCard from "./UserProfileProcedureCard"
import classnames from 'classnames';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <h2 body className="text-center p-1 mb-4 bg-secondary text-white mt-5">
          User Profile
        </h2>

        
        <div >
          <div className="userBtn">
        <Nav   tabs>
          <NavItem className="medTab">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Medications
            </NavLink>
          </NavItem>
          <NavItem className="procedureTab">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Procedures
            </NavLink>
          </NavItem>
        </Nav>
        </div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          
        <div className="d-flex justify-content-center"><Button
          
           
          type="button" color="success"
          onClick={() => this.props.history.push("/medicationlist")} className="mr-2"
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
              
          </TabPane>
          <TabPane tabId="2">
          <div className="d-flex justify-content-center">
        <Button
          
           
          type="button" color="success"
          onClick={() => this.props.history.push("/procedures")}
        >
          Add Procedure
        </Button></div>
            
              <div>
          {this.props.userProfileProcedure.map(procedure => (
            <UserProfileProcedureCard
              key={procedure.id}
              procedure={procedure}
              procedures={this.props.procedures}
              addProcedureToProfile={this.props.addProcedureToProfile}
              deleteProcedureFromProfile={this.props.deleteProcedureFromProfile}
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
              
          </TabPane>
        </TabContent>
      </div>
        

        
        
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(UserProfile);
