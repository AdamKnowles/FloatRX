import React, { Component } from 'react'
import { withRouter } from 'react-router'
import MedicationCard from "./MedicationCard"
import NavBar from '../nav/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import MedDropdown from "../Dropdown"

class MedicationList extends Component {
    
    render() {
        return (
            <React.Fragment>
                
            
            <div>
                <MedDropdown 
                // {...this.props} 
                />
                
                
                {
                    this.props.medications
                .map(medication => <MedicationCard key={medication.id} medication={medication} {...this.props} />)
                
                }
                
                {/* {
                    this.props.oncologyMedications
                .map(medication => <MedicationCard key={medication.id} medication={medication} {...this.props} />)
                
                } */}
                
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(MedicationList)
