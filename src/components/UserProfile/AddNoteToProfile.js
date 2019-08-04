import React, { Component } from "react";

export default class AddNoteToProfile extends Component {
  state = {
    medicationId: this.props.medicationId,
    note: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log(stateToChange);
  };

  addNewNote = evt => {
    evt.preventDefault();
    const note = {
      medicationId: this.state.medicationId,
      note: this.state.note
    };

    this.props.addNote(note);
    // .then(() => this.props.history.push("/comments"));
  };

  render() {
    console.log("Add Note Form");
    return (
      <React.Fragment>
        <div>
          <form className="addNoteForm">
            <div className="form-group">
              <label htmlFor="noteName" />
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="note"
                placeholder="Add Note"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.addNewNote}
            >
              Add Note
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
