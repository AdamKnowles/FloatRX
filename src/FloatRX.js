import React, { Component } from 'react'
import ApplicationViews from "./ApplicationViews"
import NavBar from "./components/nav/NavBar"

export default class FloatRX extends Component {
    render() {
        return (
            <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
        )
    }
}
