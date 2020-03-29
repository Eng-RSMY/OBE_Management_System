import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addClos } from "../../../actions/clos";
import { getPlos } from "../../../actions/plos";
import { getCongitive } from "../../../actions/chairman_framework_actions/cognitive";
import { getAffective } from "../../../actions/chairman_framework_actions/affectives";
import { getPsychomotor } from "../../../actions/chairman_framework_actions/psychomotors";
export class POSTCLO extends Component {
  state = {
    code: "",
    description: "",
    plos: null,
    cognitives: null,
    affectives: null,
    psychomotors: null,
    //selectedid: null,
    verbs: null
  };
  static propTypes = {
    plos: PropTypes.func.isRequired,
    getPlos: PropTypes.func.isRequired,
    getCongitive: PropTypes.func.isRequired,
    getAffective: PropTypes.func.isRequired,
    getPsychomotor: PropTypes.func.isRequired,
    addClo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPlos();
    this.props.getCongitive();
    this.props.getAffective();
    this.props.getPsychomotor();
  }
  onChangeplos = selected => {
    console.log(selected);
    this.setState({
      plos: selected
    });
  };
  onChangecognitives = selected => {
    // console.log(selected);
    if (selected.value === null) {
      this.setState({
        cognitives: null
      });
    } else {
      this.setState({
        cognitives: selected
      });
    }
  };

  onChangeverbs = selected => {
    //console.log(selected);
    this.setState({
      verbs: selected
    });
  };

  onChangeaffectives = selected => {
    if (selected.value === null) {
      this.setState({
        affectives: null
      });
    } else {
      this.setState({
        affectives: selected
      });
    }
  };

  onChangepsychomotors = selected => {
    if (selected.value === null) {
      this.setState({
        psychomotors: null
      });
    } else {
      this.setState({
        psychomotors: selected
      });
    }
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    const {
      code,
      description,
      plos,
      cognitives,
      affectives,
      psychomotors,
      verbs
    } = this.state;
    const clo = {
      code,
      description,
      plos,
      cognitives,
      affectives,
      psychomotors,
      verb: verbs.value
    };
    clo.plos = [];
    clo.cognitives = [];
    clo.affectives = [];
    clo.psychomotors = [];
    for (let i in plos) {
      clo.plos.push(plos[i].value);
    }
    if (cognitives !== null) {
      clo.cognitives.push(cognitives.value);
    }
    if (affectives !== null) {
      clo.affectives.push(affectives.value);
    }
    if (psychomotors !== null) {
      clo.psychomotors.push(psychomotors.value);
    }
    console.log(clo);
    this.props.addClos(clo);
  };

  verbsoptions = () => {
    /*
    if (this.state.selectedid === null) {
      return null;
    }
    */

    if (
      this.state.cognitives === null &&
      this.state.affectives === null &&
      this.state.psychomotors === null
    ) {
      return null;
    }
    let verbsoptions = [];
    if (this.state.cognitives !== null) {
      for (let i in this.props.cognitives) {
        if (this.state.cognitives.value === this.props.cognitives[i].id) {
          for (let j in this.props.cognitives[i].verbs) {
            verbsoptions.push({
              value: this.props.cognitives[i].verbs[j],
              label: this.props.cognitives[i].verbs[j]
            });
          }
        }
      }
    }
    if (this.state.affectives !== null) {
      for (let i in this.props.affectives) {
        if (this.state.affectives.value === this.props.affectives[i].id) {
          for (let j in this.props.affectives[i].verbs) {
            verbsoptions.push({
              value: this.props.affectives[i].verbs[j],
              label: this.props.affectives[i].verbs[j]
            });
          }
        }
      }
    }
    if (this.state.psychomotors !== null) {
      for (let i in this.props.psychomotors) {
        if (this.state.psychomotors.value === this.props.psychomotors[i].id) {
          for (let j in this.props.psychomotors[i].verbs) {
            verbsoptions.push({
              value: this.props.psychomotors[i].verbs[j],
              label: this.props.psychomotors[i].verbs[j]
            });
          }
        }
      }
    }

    //console.log(options)
    return verbsoptions;
  };

  render() {
    //console.log(this.verbsoptions());
    // console.log(this.state.cognitives);
    // console.log(this.props.cognitives);
    const {
      code,
      description,
      plos,
      cognitives,
      affectives,
      psychomotors
    } = this.state;
    let optionplos = [];
    let optioncognitives = [{ value: null, label: "select other option" }];
    let optionaffectives = [{ value: null, label: "select other option" }];
    let optionpsychomotors = [{ value: null, label: "select other option" }];
    //console.log(this.props.plos.length);

    if (this.props.plos.length > 0) {
      for (let i in this.props.plos) {
        optionplos.push({
          value: this.props.plos[i].id,
          label: this.props.plos[i].code
        });
      }
    }
    if (this.props.cognitives.length > 0) {
      for (let i in this.props.cognitives) {
        optioncognitives.push({
          value: this.props.cognitives[i].id,
          label: this.props.cognitives[i].code
        });
      }
    }
    if (this.props.affectives.length > 0) {
      for (let i in this.props.affectives) {
        optionaffectives.push({
          value: this.props.affectives[i].id,
          label: this.props.affectives[i].code
        });
      }
    }

    if (this.props.psychomotors.length > 0) {
      for (let i in this.props.psychomotors) {
        optionpsychomotors.push({
          value: this.props.psychomotors[i].id,
          label: this.props.psychomotors[i].code
        });
      }
    }
    return (
      <div>
        <h1>Add CLO</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>code</label>
            <input
              className="form-control"
              type="text"
              name="code"
              onChange={this.onChange}
              value={code}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            ></input>
            <label>Select PLO</label>
            <Select
              value={plos}
              onChange={this.onChangeplos}
              options={optionplos}
              isMulti
            />
            <label>Select Cognitive Domain</label>
            <Select
              placeholder="select cognitive domain"
              value={cognitives}
              onChange={this.onChangecognitives}
              options={optioncognitives}
              isDisabled={affectives || psychomotors}
            />
            <label>Select Affective Domain</label>
            <Select
              placeholder="select affective domain"
              value={affectives}
              onChange={this.onChangeaffectives}
              options={optionaffectives}
              isDisabled={cognitives || psychomotors}
            />

            <label>Select Psychomotor Domain</label>
            <Select
              placeholder="select psychomotor domain"
              value={psychomotors}
              onChange={this.onChangepsychomotors}
              options={optionpsychomotors}
              isDisabled={affectives || cognitives}
            />
            <label>Select Verb</label>
            <Select
              value={this.state.verbs}
              onChange={this.onChangeverbs}
              options={this.verbsoptions()}
              isDisabled={!cognitives && !affectives && !psychomotors}
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

const mapStateToProps = state => ({
  plos: state.plos.plos,
  cognitives: state.cognitives.cognitives,
  affectives: state.affectives.affectives,
  psychomotors: state.psychomotors.psychomotors
});

export default connect(mapStateToProps, {
  addClos,
  getPlos,
  getCongitive,
  getAffective,
  getPsychomotor
})(POSTCLO);
