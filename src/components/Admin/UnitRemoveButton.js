import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';

export default class UnitRemoveButton extends Component {
    render() {
        if (this.props.unit.id > 5){
        return (
            <Button size ="sm" onClick={() =>this.props.deleteAdminUnit(this.props.unit.id)}>Remove Unit</Button>
        
        )
        }
        else{
            return null
        }
    }
}
