import React, { Component } from "react";
import { Card, CardBody, CardFooter, Button,Modal, ModalFooter } from "reactstrap";
import AddNoteProcedureModal from "./AddProcedureNoteModal"
import NoteProcedureEditFormModal from "./NoteProcedureEditFormModal"



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
                    <div key={this.props.notes.id} ></div>
                  
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
                <div>
                {this.props.notes.filter(
                note =>
                  note.procedureId === this.props.procedure.procedureId).
              map( note =>(<React.Fragment><CardBody className="text-dark mt-4" 
              inverse
              style={{ backgroundColor: "#93E9BE", borderColor: "#FFF4EF" }}><div ><CardBody className="text-dark border border-dark" 
              inverse
              style={{ backgroundColor: "#FFF4EF", borderColor: "#FFF4EF" }}><h6 className="mt-0">{note.note}</h6></CardBody><div className="editDeleteButtons" > <NoteProcedureEditFormModal toggle={this.toggle} editNewNote={this.props.editNewNote} notes={this.props.notes} note={note} {...this.props} />  <Button color="danger" size="" onClick={() =>this.props.deleteNoteFromProfile(note.id)} >
                    Delete
                  </Button></div></div></CardBody></React.Fragment>))}</div>
                   
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
