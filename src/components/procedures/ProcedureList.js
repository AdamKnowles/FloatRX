import React, { Component } from 'react'
import ProcedureCard from "./ProcedureCard"
import MedDropdown from "../Dropdown"
import {Button} from "reactstrap";


export default class ProcedureList extends Component {
    render() {
        if (this.props.unitParam !== "") {
        return (
            <React.Fragment><br></br><br></br><div className="container">
                <h2 className="text-center p-1 mb-4 bg-secondary text-white mt-0 ">
             Procedure List
          </h2>
          <div className="showAllMeds">
          
          <Button className="match" color="info" onClick={this.props.showAllMeds} >
          Show All Medications
        </Button></div>
          <MedDropdown
              units={this.props.units}
              {...this.props}
              searchParam={this.props.searchParam}
              unitParam={this.props.unitParam}
              
              
            />
            
            {this.props.procedures.filter(
                procedure =>
                  procedure.unitId === parseInt(this.props.unitParam)
              )
              .map(procedure => (
                <ProcedureCard
                  key={procedure.id}
                  
                  procedure={procedure} toggle={this.props.toggle}
                  
                  {...this.props}
                />
              ))}</div></React.Fragment>
        )
              }
              else{
                return (
                    <React.Fragment>
                      <div className="container">
                      <h2 className="text-center p-1 mb-3 bg-secondary text-white mt-5">
                         Procedure List
                      </h2>
                        <br></br>
                        <br></br>
                        <MedDropdown
                          units={this.props.units}
                          {...this.props}
                          searchParam={this.props.searchParam}
                          unitParam={this.props.unitParam}
                        />
                         {this.props.procedures
                          .map(procedure => (
                            <ProcedureCard
                              key={procedure.id}
                              addProcedureToProfile={this.props.addProcedureToProfile}
                              procedure={procedure}
                              
                              {...this.props}
                            />
                          ))}
                      </div>
                    </React.Fragment>
                  );
              }
    }
}



