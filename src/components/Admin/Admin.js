import React, { Component } from 'react'

export default class Admin extends Component {

    state = {
        name: "",
        class: "",
        route: "",
        dosage: "",
        frequency: "",
        indications: "",
        mechanism: ""
      };

      handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
      };

      makeAdminMed = (evt) => {
        evt.preventDefault();
          const adminMedication = {
        name: this.state.name,
        class: this.state.class,
        route: this.state.route,
        dosage: this.state.dosage,
        frequency: this.state.frequency,
        indications: this.state.indications,
        mechanism: this.state.mechanism
          }
          
          this.props
          .makeAdminMed(adminMedication)
          .then(() => this.props.history.push("/medicationlist"));
        }


    render() {
        return (
            
            <React.Fragment>
            <h1 className="admin">Add a Medication</h1>
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
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="indications"
              placeholder="Indica
              tions"
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="mechanism"
              placeholder="Mechanism"
            />
          </div>
          
          
          <button
            type="submit"
            onClick={this.makeAdminMed}
            className="btn btn-primary"
          >
            Add Medication
          </button>
        </form>
                
            </div>
      </React.Fragment>
        )
    }
}
