import React, { Component } from 'react'
import { withRouter } from 'react-router'
 class UserProfile extends Component {
    render() {
        return (
            <div>
                <p>This is User Profile</p>
            </div>
        )
    }
}
export default withRouter(UserProfile)
