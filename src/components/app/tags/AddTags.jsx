import React, { Component } from "react";
import Section from "../../globals/Section";
import { InputLine } from "./../../globals/Input";
import Form from "./../../globals/Form";
import ActionButton from "./../../globals/ActionButton";
import { Addtag } from "../../../redux/actions/tags.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddTags extends Component {
  state = {
    tag: ""
  };

  onChange = e => {
    this.setState({ tag: e.target.value });
  };

  CreateTag = e => {
    e.preventDefault();

    const { tag } = this.state;

    if (tag.trim() === "") return;

    console.log(tag);

    this.props.addtg(tag);

    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    const { tag } = this.state;

    return (
      <Section>
        <Form onSubmit={this.CreateTag}>
          {this.props.tag_error && <div style={{ textAlign: "center", color: "red" }}>{this.props.tag_error}</div>}
          <label style={{ textAlign: "center", fontSize: "15px" }} htmlFor="caption">
            ADD TAG
          </label>
          <InputLine type="text" placeholder="" onChange={this.onChange} value={tag}  />
          <span style={{ textAlign: "center", fontSize: "12px", color: "red", marginBottom: "30px" }}>lowercase letters</span>
          <ActionButton type="submit" value="Submit" disable={this.props.taag}>
            {this.props.taag ? "Processing..." : "Submit"}
          </ActionButton>
        </Form>
      </Section>
    );
  }
}

AddTags.propTypes = {
  taag: PropTypes.bool.isRequired,
  tag_error: PropTypes.string.isRequired,
  addtg: PropTypes.func.isRequired
};

const mapStateToProp = ({ tag }) => ({
  taag: tag.Isloading,
  tag_error: tag.errorMessage
});

const mapDispatchToProps = dispatch => ({
  addtg: tag => dispatch(Addtag(tag))
});

export default connect(mapStateToProp, mapDispatchToProps)(AddTags);
