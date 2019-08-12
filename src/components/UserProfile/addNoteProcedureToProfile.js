import React, { Component } from "react";
import { Card, CardBody, CardFooter, Button,Modal, ModalFooter } from "reactstrap";
import AddNoteProcedureModal from "./AddProcedureNoteModal"



export default class AddNoteProcedureToProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: "",
      note: ""
      
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
       
    }));
  }



  

  render() {
      
    
    return (
      
      <section className="procedure">
      <Button color="danger" onClick={this.toggle}>View Notes</Button>
      {
        <Modal isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className} size="lg">
                  
          <Card
              
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#93E9BE", borderColor: "#93E9BE" }}
            ><div className="text-dark">
          </div>
          <h1>
            <u>{this.props.procedure.name}</u>
          </h1>
              
             
                
                <AddNoteProcedureModal procedures={this.props.procedures} procedure={this.procedure} {...this.props} />
                   
                  <Button  onClick={this.toggle} className=" btn mt-4">
                    Cancel
                  </Button>
                
                
              
            </Card>
            
        </Modal>
        }
            </section>
        
      
    );
  }
}
