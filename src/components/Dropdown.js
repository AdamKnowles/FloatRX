import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MedDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle> {this.state.value} Unit</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.select}>Transplant</DropdownItem>
            <DropdownItem onClick={this.select}>Obstetrics</DropdownItem>
            <DropdownItem onClick={this.select}>Oncology</DropdownItem>
            <DropdownItem onClick={this.select}>Intensive Care</DropdownItem>
            <DropdownItem onClick={this.select}>Urology</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}
