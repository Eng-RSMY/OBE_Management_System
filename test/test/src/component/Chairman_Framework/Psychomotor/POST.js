import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { WithContext as ReactTags } from "react-tag-input";
import { addPsychomotor } from "../../../actions/chairman_framework_actions/psychomotors";

const KeyCodes = {
  comma: 188,
  enter: 13,
  space: 32
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export class POST extends Component {
  state = {
    code: "",
    definition: "",
    tags: []
  };
  static propTypes = {
    addPsychomotor: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    const { code, definition, tags } = this.state;
    let verbs = [];
    for (let i in tags) {
      verbs.push(tags[i].tags);
    }
    const psychomotor = { code, definition, verbs };
    // console.log(psychomotor);
    this.props.addPsychomotor(psychomotor);
  };

  constructor(props) {
    super(props);

    this.state = {
      tags: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }
  render() {
    const { code, definition, tags } = this.state;
    return (
      <div>
        <h1>Add Psychomotor Domain(doing, skills)</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Code</label>
            <input
              className="form-control"
              type="text"
              name="code"
              onChange={this.onChange}
              value={code}
            ></input>
          </div>
          <div className="form-group">
            <label>Definition</label>
            <input
              className="form-control"
              type="text"
              name="definition"
              onChange={this.onChange}
              value={definition}
            ></input>
          </div>
          <div>
            <label>Enter Verbs</label>
            <ReactTags
              tags={tags}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters}
              labelField={"tags"}
              name="tags"
              value={tags}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPsychomotor })(POST);
