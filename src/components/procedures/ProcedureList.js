import React, { Component } from 'react'
import ProcedureCard from "./ProcedureCard"

export default class ProcedureList extends Component {
    render() {
        return (
            <React.Fragment><br></br><br></br><div>
                <h1>Procedures Page</h1>
            </div>
            {this.props.procedures
              .map(procedure => (
                <ProcedureCard
                  key={procedure.id}
                  
                  procedure={procedure}
                  
                  {...this.props}
                />
              ))}</React.Fragment>
        )
    }
}
