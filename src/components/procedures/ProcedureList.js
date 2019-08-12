import React, { Component } from 'react'
import ProcedureCard from "./ProcedureCard"

export default class ProcedureList extends Component {
    render() {
        return (
            <React.Fragment><br></br><br></br><div className="container">
                <h2 className="text-center p-1 mb-4 bg-secondary text-white mt-1 ">
             Procedure List
          </h2>
            
            {this.props.procedures
              .map(procedure => (
                <ProcedureCard
                  key={procedure.id}
                  
                  procedure={procedure} toggle={this.props.toggle}
                  
                  {...this.props}
                />
              ))}</div></React.Fragment>
        )
    }
}
