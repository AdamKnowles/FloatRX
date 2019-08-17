import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';

export default class UnitCard extends Component {
    render() {
        return (
            <section className="units">
            {
              <div key={this.props.unit.id} className="">
                
                <Card
                  body
                  className="text-center text-dark"
                  body
                  inverse
                  style={{ backgroundColor: "#98FF98", borderColor: "#98FF98" }}
                >
                  <CardBody className="#8fbc8f">
                    <h1><u>{this.props.unit.name}</u></h1>
                    <Button onClick={() =>this.props.deleteAdminUnit(this.props.unit.id)}>Remove Unit</Button>
                    
                    
                  </CardBody>
                </Card>
              </div>
            }
          </section>
        )
    }
}