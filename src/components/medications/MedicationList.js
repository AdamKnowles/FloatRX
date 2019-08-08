import React, { Component } from "react";
import { withRouter } from "react-router";
import MedicationCard from "./MedicationCard";
import NavBar from "../nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MedDropdown from "../Dropdown";
import {Button} from "reactstrap";
import APImanager from "../../modules/APImanager"

class MedicationList extends Component {
  

  

  render() {
    if (this.props.unitParam !== "") {
      return (
        <React.Fragment>
          <div className="container">
          <h2 body className="text-center">
             Medication List
          </h2>
          <Button  onClick={this.props.logout}>
          Logout
        </Button>
          <Button  onClick={this.props.showAllMeds}>
          Show All Medications
        </Button>
          
          
         
          
          <div>
            <MedDropdown
              units={this.props.units}
              {...this.props}
              searchParam={this.props.searchParam}
              unitParam={this.props.unitParam}
            />

            {this.props.medications
              .filter(
                medication =>
                  medication.unitId === parseInt(this.props.unitParam)
              )
              .map(medication => (
                <MedicationCard
                  key={medication.id}
                  addMedicationToProfile={this.props.addMedicationToProfile}
                  medication={medication}
                  {...this.props}
                />
              ))}
          </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <h2 className="text-center">Medication List</h2>
            <Button  onClick={this.props.logout}>
          Logout
        </Button>
            <MedDropdown
              units={this.props.units}
              {...this.props}
              searchParam={this.props.searchParam}
              unitParam={this.props.unitParam}
            />
             {this.props.medications
              .map(medication => (
                <MedicationCard
                  key={medication.id}
                  addMedicationToProfile={this.props.addMedicationToProfile}
                  medication={medication}
                  
                  {...this.props}
                />
              ))}
          </div>
        </React.Fragment>
      );
    }
    // return (
    //     <React.Fragment>

    //     <div>

    //         {
    //             this.props.medications
    //         .map(medication => <MedicationCard key={medication.id} medication={medication} {...this.props} />)

    //         }

    //     </div>
    //     </React.Fragment>
    // )
  }
}

export default withRouter(MedicationList);
