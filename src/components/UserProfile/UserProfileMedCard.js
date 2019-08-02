import React, { Component } from 'react'
import { Card,Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class UserProfileMedCard extends Component {
    
    
    render() {
        console.log(this.props)
        return (
            <section className="medication">
        {
          
            

<div key={this.props.medication.id} className="card">
<Card body className="text-center" body inverse style={{ backgroundColor: '#19690c', borderColor: '#333' }}>
  
  <CardBody className='#8fbc8f' >
  <h1><u>{this.props.medication.name}</u></h1>
    <h5>{this.props.medication.class}</h5>
    <CardText>Route: {this.props.medication.route}</CardText>
    <CardText>Dosage: {this.props.medication.dosage}</CardText>
    <CardText>Indication: {this.props.medication.indications}</CardText>
    <CardText>Mechanism of Action: {this.props.medication.mechanism}</CardText>
    <Button onClick={() => this.props.deleteMedFromProfile(this.props.medication.id)}>Remove Medication</Button>
    
  </CardBody>
</Card>
</div>
          
        }
      </section>
        )
    }
}
