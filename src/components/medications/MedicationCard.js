import React, { Component } from 'react'
import { Card,Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class MedicationCard extends Component {
  state = {
  name:this.props.medication.medication.name ,
  class:this.props.medication.medication.class ,
  route:this.props.medication.medication.route ,
  dosage:this.props.medication.medication.dosage,
  frequency: this.props.medication.medication.frequency,
  indications:this.props.medication.medication.indications ,
  mechanism:this.props.medication.medication.mechanism,
  medicationId: this.props.medication.medication.id
  };
  

  addNewMed = (evt) => {
    evt.preventDefault();
    console.log("clicked add to profile button")
      const medication = {
  name: this.state.name ,
  class:this.state.class ,
  route:this.state.route ,
  dosage:this.state.dosage,
  frequency: this.state.frequency,
  indications:this.state.indications,
  mechanism:this.state.mechanism ,
  medicationId: this.state.medicationId
      }
      
      this.props
      .addMedicationToProfile(medication)
      // .then(() => this.props.history.push("/events"));
    }
    render() {
        return (
            <section className="medication">
        {
          
            

<div key={this.props.medication.medication.id} className="card">
<Card body className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  
  <CardBody className='#8fbc8f' >
  <h1><u>{this.props.medication.medication.name}</u></h1>
    <h5>{this.props.medication.medication.class}</h5>
    <CardText>Route: {this.props.medication.medication.route}</CardText>
    <CardText>Dosage: {this.props.medication.medication.dosage}</CardText>
    <CardText>Indication: {this.props.medication.medication.indications}</CardText>
    <CardText>Mechanism of Action: {this.props.medication.medication.mechanism}</CardText>
    <Button onClick={this.addNewMed}>Add to Profile</Button>
  </CardBody>
</Card>
</div>
          
        }
      </section>
        )
    }
}
