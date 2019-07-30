import React, { Component } from 'react'

export default class MedicationCard extends Component {
    render() {
        return (
            <section className="medications">
        {
          
            <div key={this.props.medication.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <p>Name: {this.props.medication.name}</p>
                  <p>Class: {this.props.medication.class}</p>
                  <p>Route: {this.props.medication.route}</p>
                  <p>Dosage: {this.props.medication.dosage}</p>
                  <p>Indication: {this.props.medication.indications}</p>
                  <p>Mechanism of Action: {this.props.medication.mechanism}</p>
                  
                </div>
              </div>
            </div>
          
        }
      </section>
        )
    }
}
