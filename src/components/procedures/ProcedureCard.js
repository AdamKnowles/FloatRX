import React, { Component } from 'react'
import { Card, CardBody, Button, Modal, ModalFooter } from "reactstrap";

export default class ProcedureCard extends Component {
    render() {
        return (
            <section className="produres">
        {
          <div key={this.props.procedures.id} className="">
            
            <Card
              body
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#9CA89E", borderColor: "#9CA89E" }}
            >
              <CardBody className="#8fbc8f">
                <h1>
                  <u>{this.props.procedure.name}</u>
                </h1>
                
                <Button color="danger" body className="text-center">
                  Add to Profile
                </Button>
              </CardBody>
            </Card>
          </div>
        }
      </section>
        )
    }
}
