import React, { Component } from 'react'
import MedicationList from "./components/medications/MedicationList"
import UserProfile from "./components/UserProfile/UserProfile"
import { withRouter } from 'react-router'
import { Route, Redirect } from "react-router-dom";


 class ApplicationViews extends Component {
    render() {
        return (
          <React.Fragment>  
        <Route
          exact
          path="/medicationlist"
          render={props => {
            return <MedicationList />;
            // Remove null and return the component which will show news articles
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <UserProfile />;
            // Remove null and return the component which will show news articles
          }}
        />
        </React.Fragment>
            
        )
    }
}
export default withRouter(ApplicationViews)
