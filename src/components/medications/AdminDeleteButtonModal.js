import React, { Component } from 'react'
import AdminButton from './AdminButton';
import { Card, CardBody, Button,Modal, ModalFooter } from "reactstrap";

export default class AdminDeleteButtonModal extends Component {
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
            if(this.isAuthenticated() & this.adminAuthenticated()){
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
                  className="text-center text-dark"
                  body
                  inverse
                  style={{
                    backgroundColor: "#9CA89E",
                    borderColor: "#9CA89E",
                    color: "#9CA89E"
                  }}>
                      
                    <h4>
                      Delete {this.props.medication.medication.name} from Medication List?
                    </h4>
                    
                    
                  </CardBody>
                

                <ModalFooter>
                  <AdminButton deleteAdminMed={this.props.deleteAdminMed} {...this.props} />
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
