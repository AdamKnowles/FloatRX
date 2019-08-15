import React, { Component } from 'react'
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import APImanager from "../../modules/APImanager"

export default class AdminEditMed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        modal: false,
        id: "",
        name: "",
        class: "",
        route: "",
        dosage: "",
        frequency: "",
        indications: "",
        mechanism: "",
        
          
        };
    
        this.toggle = this.toggle.bind(this);
      
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal,
           
        }));
      }

      handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
        
      }
      editAdminMed = evt => {
        evt.preventDefault();
        const medication = {

        name: this.state.name,
        class: this.state.class,
        route: this.state.route,
        dosage: this.state.dosage,
        frequency: this.state.frequency,
        indications: this.state.indications,
        mechanism: this.state.mechanism,
        id: this.props.medication.medicationId
        };
        
    
        this.props.editAdminMed(medication)
        this.state.modal=false
    }
    componentDidMount() {
        
        APImanager.get("medications", this.props.medication.medicationId).then(medication => {
          this.setState({
        id: medication.medicationId,
        name: medication.name,
        class: medication.class,
        route: medication.route,
        dosage: medication.dosage,
        frequency: medication.frequency,
        indications: medication.indications,
        mechanism: medication.mechanism,
        
            
          });
        });
      }
      isAuthenticated = () => sessionStorage.getItem("userId") !== null;
  adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
    
    
    render() {
        if(this.isAuthenticated() & this.adminAuthenticated()){
        return (
            <React.Fragment>
                <div>
                <Button className="edit" color="warning"   onClick={this.toggle}>Edit</Button>
            </div>
            <div>
            <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className} size="lg">
            <h3 className="text-center">Edit Medication</h3>
            <div className ="container">
        <form className="adminForm">
          <div className="form-group">
           
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Medication Name"
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="class"
              placeholder="Class Name"
              value={this.state.class}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="route"
              placeholder="Route"
              value={this.state.route}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="dosage"
              placeholder="Dosage"
              value={this.state.dosage}
            />
          </div>
          <div className="form-group">
           
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="frequency"
              placeholder="Frequency"
              value={this.state.frequency}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="indications"
              placeholder="Indications"
              value={this.state.indications}
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="mechanism"
              value={this.state.mechanism}
            />
          </div>
          <div >
          </div>
          
          
          <button
            type="submit"
            onClick={this.editAdminMed}
            className="btn btn-primary mr-2"
          >
            Save
          </button>
          <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
        </form>
                
            </div>
            </Modal>
            </div>
            
        
      </React.Fragment>
        )
        }
        else{
            return null
        }
    }
}