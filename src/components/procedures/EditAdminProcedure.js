import React, { Component } from 'react'
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";
import APImanager from "../../modules/APImanager"

export default class EditAdminProcedure extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        modal: false,
        id: "",
        name: "",
        indications: "",
        method: "",
        complications: "",
        
        
          
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
      editAdminProcedure = evt => {
        evt.preventDefault();
        const procedure = {

        name: this.state.name,
        indications: this.state.indications,
        method: this.state.method,
        complications: this.state.complications,
        id: this.props.procedure.procedureId
        };
        
    
        this.props.editAdminProcedure(procedure)
        this.state.modal=false
    }
    componentDidMount() {
        
        APImanager.get("procedures", this.props.procedure.procedureId).then(procedure => {
          this.setState({
        id: procedure.procedureId,
        name: procedure.name,
        indications: procedure.indications,
        method: procedure.method,
        complications: procedure.complications
        
        
            
          });
        });
      }
      isAuthenticated = () => sessionStorage.getItem("userId") !== null;
  adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
    
    
    render() {
        if(this.isAuthenticated() & this.adminAuthenticated()){
        return (
            <React.Fragment>
                
                <Button className="edit" color="primary" size=""  onClick={this.toggle}>Edit</Button>
            
            <div>
            <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className} size="lg">
            <h1 className="admin">Edit Medication</h1>
            <div className ="container">
            <form className="adminForm">
          <div className="form-group">
           
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Procedure Name"
              value={this.state.name}
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
              id="method"
              placeholder="Method"
              value={this.state.method}
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
              value={this.state.complications}
            />
          </div>
          
          
          
          
          <button
            type="submit"
            onClick={this.editAdminProcedure}
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