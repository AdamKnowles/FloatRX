import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
    this.props.searchParam(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        {
          <div>
            <Dropdown
              body
              className="text-center"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle> {this.state.value} Unit</DropdownToggle>
              <DropdownMenu>
                {this.props.units.map(unit => (
                  <DropdownItem
                    onClick={this.toggle_modal}
                    toggle={false}
                    value={unit.id}
                    onClick={this.select}
                  >
                    {unit.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        }
      </React.Fragment>
    );
  }
}
