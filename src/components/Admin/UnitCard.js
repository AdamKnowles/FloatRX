import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';
import UnitRemoveButton from "./UnitRemoveButton"

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
                  style={{ backgroundColor: "#E7F2F8", borderColor: "#E7F2F8" }}
                >
                  <CardBody className="#8fbc8f">
                    <h5><u>{this.props.unit.name}</u></h5>
                    
                    
                    
                     
                    
                      
                      <UnitRemoveButton deleteAdminUnit={this.props.deleteAdminUnit}{...this.props} />
                    
                
                    
                    
                    
                  </CardBody>
                </Card>
              </div>
            }
          </section>
        )
    }
}
