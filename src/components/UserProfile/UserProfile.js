import React, { Component } from 'react'
import { withRouter } from 'react-router'
import MedicationCard from "../medications/MedicationCard"
import UserProfileMedCard from './UserProfileMedCard';
 class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                 {this.props.userProfile.map(medication => <UserProfileMedCard key={medication.id}  medication={medication} {...this.props}  />)}
                <p>This is User Profile</p>
            </div>
            </React.Fragment>
        )
    }
}
export default withRouter(UserProfile)
