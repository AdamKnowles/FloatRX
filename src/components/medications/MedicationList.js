import React, { Component } from "react";
import { withRouter } from "react-router";
import MedicationCard from "./MedicationCard";
import NavBar from "../nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MedDropdown from "../Dropdown";
import {Button} from "reactstrap";

class MedicationList extends Component {
  render() {
    if (this.props.unitParam !== "") {
      return (
        <React.Fragment>
          <h2 body className="text-center">
            Unit Specific Medication List
          </h2>
          <Button  onClick={this.props.logout}>
          Logout
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
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <MedDropdown
              units={this.props.units}
              {...this.props}
              searchParam={this.props.searchParam}
              unitParam={this.props.unitParam}
            />
            <p>Choose a Unit</p>
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
