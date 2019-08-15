import React, { Component } from "react";
import { Card, CardBody, Button, Modal, ModalFooter } from "reactstrap";
import "../../index.css"
import AdminButton from "./AdminButton"
import AdminEditMed from "./AdminEditMed"


export default class MedicationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicationId: this.props.medication.medication.id,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addNewMed = evt => {
    evt.preventDefault();
    const medication = {
      medicationId: this.state.medicationId,
      userId: Number(sessionStorage.getItem("userId"))
    };

    this.props
      .addMedicationToProfile(medication)
      .then(() => this.props.history.push("/profile"));
  };

  
  render() {
    return (
      <section className="medication">
        {
          <div key={this.props.medication.medication.id} className="">
            <div>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
                size="lg"
              >
                {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
                <Card
                  body
                  className="text-center "
                  body
                  inverse
                  style={{
                    backgroundColor: "#93E9BE",
                    borderColor: "#93E9BE",
                    color: "#93E9BE"
                  }}
                >
                  <CardBody className="text-dark ">
                    <h1>
                      <u>{this.props.medication.medication.name}</u>
                    </h1>
                    <h4>{this.props.medication.medication.class}</h4>
                    <h6>Route: {this.props.medication.medication.route}</h6>
                    <h6>Dosage: {this.props.medication.medication.dosage}</h6>
                    <h6>Frequency: {this.props.medication.medication.frequency}</h6>
                    <h6>
                      Indication: {this.props.medication.medication.indications}
                    </h6>
                    <h6>
                      Mechanism of Action:
                      {this.props.medication.medication.mechanism}
                    </h6>
                  </CardBody>
                </Card>

                <ModalFooter>
                  <Button
                    color="danger"
                    onClick={this.toggle}
                    onClick={this.addNewMed}
                  >
                    Add To Profile
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#9CA89E", borderColor: "#9CA89E" }}
            >
              <CardBody className="#8fbc8f">
                <h1>
                  <u>{this.props.medication.medication.name}</u>
                </h1>
                <h4>{this.props.medication.medication.class}</h4>
                <div className= "medCardBtn">
                  <AdminEditMed editAdminMed={this.props.editAdminMed} medications={this.props.medications}  {...this.props} />
                <AdminButton deleteAdminMed={this.props.deleteAdminMed} medications={this.props.medications} {...this.props} />
                <Button color="primary" body className="text-center mr-2 ml-2" onClick={this.toggle}>
                  More Info
                </Button>
                <Button color="danger" body className="text-center" onClick={this.addNewMed}>
                  Add to Profile
                </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        }
      </section>
    );
  }
}
