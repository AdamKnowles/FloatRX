import React, { Component } from 'react'
import MedDropdown from '../Dropdown';
import classnames from 'classnames';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class Admin extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      
      this.setState({
        activeTab: tab
      });
    }
  }

    state = {
        name: "",
        class: "",
        route: "",
        dosage: "",
        frequency: "",
        indications: "",
        mechanism: "",
        procedureName:"",
        procedureIndications:"",
        method:"",
        complications:"",
        activeTab: '1'
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
      makeAdminProcedure = (evt) => {
        evt.preventDefault();
          const adminProcedure = {
        name: this.state.procedureName,
        indications: this.state.procedureIndications,
        method: this.state.method,
        complications: this.state.complications
        
          }
          
          this.props
          .makeAdminProcedure(adminProcedure)
          .then(() => this.props.history.push("/procedures"));
        }


    render() {
        return (
            
            <React.Fragment>
              
               <div className="adminTab">
        <Nav   tabs>
          <NavItem className="">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Add Medication
            </NavLink>
          </NavItem>
          <NavItem className="">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Add Procedure
            </NavLink>
          </NavItem>
        </Nav>
        </div>
              <div className="container">
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {/* <h1 className="admin">Add a Medication</h1> */}
            
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
              placeholder="Indications"
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
          <div className="adminUnit"><MedDropdown {...this.props} />
          </div>
          
          <div className="adminButton">
          <button
            type="submit"
            onClick={this.makeAdminMed}
            className="btn btn-primary"
          >
            Add Medication
          </button></div>
        </form>
                
            
            </TabPane>
            <TabPane tabId="2">

            {/* <h1 className="admin">Add a Procedure</h1> */}
            
        <form className="adminForm">
          <div className="form-group">
           
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="procedureName"
              placeholder="Procedure Name"
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="procedureIndications"
              placeholder="Indications"
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="method"
              placeholder="Method"
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="complications"
              placeholder="Complications"
            />
          </div>
          
          <div className="adminUnit"><MedDropdown {...this.props} />
          </div>
          
          <div className="adminButton">
          <button
            type="submit"
            onClick={this.makeAdminProcedure}
            className="btn btn-primary"
          >
            Add Procedure
          </button></div>
        </form>
                
            
            </TabPane>
            </TabContent>
            </div>
      </React.Fragment>
        )
    }
}
