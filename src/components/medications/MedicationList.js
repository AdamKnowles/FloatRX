import React, { Component } from 'react'
import { withRouter } from 'react-router'
import MedicationCard from "./MedicationCard"
import NavBar from '../nav/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"

class MedicationList extends Component {
    render() {
        return (
            <React.Fragment>
            
            <div>
                
                <select >
                    <option value="transplant">Transplant</option>
                    <option value="oncology">Oncology</option>
                    <option value="obstetrics">Obstetrics</option>
                    <option value="icu">ICU</option>
                    <option value="urology">Urology</option>


                </select>
                {
                    this.props.medications
                .map(medication => <MedicationCard key={medication.id} medication={medication} {...this.props} />)
                
                }
                
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(MedicationList)
