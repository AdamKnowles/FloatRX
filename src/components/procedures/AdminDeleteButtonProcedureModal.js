import React, { Component } from 'react'

import AdminDeleteButton from "./AdminDeleteButton"
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

export default class AdminDeleteButtonProcedureModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          
          
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    
      
    
      
      isAuthenticated = () => sessionStorage.getItem("userId") !== null;
      adminAuthenticated = () => sessionStorage.getItem("userId") == 1;
        
        
        render() {
            if(this.isAuthenticated() & this.adminAuthenticated() & this.props.procedure.procedure.id > 6){
        return (
            <React.Fragment>
            <Button className="mr-2" color="success"  onClick={this.toggle} >
                    Delete
                  </Button>
                <div>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
                size=""
              >
                {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
                
                  <CardBody className="text-dark" body
                  inverse
                  style={{ backgroundColor: "#B5B3CA", borderColor: "#B5B3CA" }}>
                      
                    <h4>
                      Delete {this.props.procedure.procedure.name} from Procedure List?
                    </h4>
                    
                    
                  </CardBody>
                

                <ModalFooter>
                  <AdminDeleteButton deleteAdminProcedure={this.props.deleteAdminProcedure} {...this.props} />
                  <Button className="btn btn-primary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
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
