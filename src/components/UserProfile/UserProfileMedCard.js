import React, { Component } from 'react'
import { Card,Col, CardImg, h6, CardBody,
    CardTitle, CardSubtitle, Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class UserProfileMedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
    
    
    render() {
        
        return (
            <section className="medication">
        {
          
            

<div key={this.props.medication.id} className="card">

<Card body className="text-center" body inverse style={{ backgroundColor: '#CADEDF', borderColor: '#0C2D48' }}>
  
  <CardBody className="text-dark" >
  <h1><u>{this.props.medication.name}</u></h1>
    <h4>{this.props.medication.class}</h4>
    <h6>Route: {this.props.medication.route}</h6>
    <h6>Dosage: {this.props.medication.dosage}</h6>
    <h6>Indication: {this.props.medication.indications}</h6>
    <h6>Mechanism of Action: {this.props.medication.mechanism}</h6>
    <h6></h6>
    <Button className="mr-2" onClick={() => this.props.deleteMedFromProfile(this.props.medication.id)}>Remove Medication</Button>
    <Button className="mr-5" id="moveOver" type="button" onClick = {() => this.props.history.push("/profile/addNoteForm")}>Add Note</Button>
    
    
  </CardBody>
</Card>
</div>
          
        }
      </section>
        )
    }
}
