import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class MedicationCard extends Component {
    render() {
        return (
            <section className="medication">
        {
          
            

<div key={this.props.medication.medication.id} className="card">
<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  
  <CardBody className='#8fbc8f' >
    <CardText>Name: {this.props.medication.medication.name}</CardText>
    <CardText>Class: {this.props.medication.medication.class}</CardText>
    <CardText>Route: {this.props.medication.medication.route}</CardText>
    <CardText>Dosage: {this.props.medication.medication.dosage}</CardText>
    <CardText>Indication: {this.props.medication.medication.indications}</CardText>
    <CardText>Mechanism of Action: {this.props.medication.medication.mechanism}</CardText>
    <Button>Add to Profile</Button>
  </CardBody>
</Card>
</div>
          
        }
      </section>
        )
    }
}
