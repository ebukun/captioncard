import React, { Component } from "react";
import Section from "../../globals/Section";
import { InputLine } from "./../../globals/Input";
import Form from "./../../globals/Form";
import ActionButton from "./../../globals/ActionButton";
import { connect } from "react-redux";
import { addCaption, createCaptionWithTags } from "../../../redux/actions/captions.action";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

class AddCaption extends Component {
  state = {
    caption: ""
  };

  onChange = e => {
    this.setState({ caption: e.target.value });
  };

  CreateCaption = e => {
    e.preventDefault();

    const { caption } = this.state;

    if (caption.trim() === "") return;

    console.log(caption);

    this.props.addCap(caption);

    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    const { caption } = this.state;
    return (
      <Section>
        <Form onSubmit={this.CreateCaption}>
          <label style={{ textAlign: "center", fontSize: "15px" }} htmlFor="caption">
            ADD CAPTION
          </label>
          <InputLine type="text" id="caption" placeholder="Enter Caption" onChange={this.onChange} value={caption} margin={"50px"} />
          <ActionButton type="submit" value="Submit" disable={this.props.caps}>
            {this.props.caps ? "Processing..." : "Submit"}
          </ActionButton>
          <RedirectionMessage>
            Want to add Captions TO Tags
            <Link to="/add-caption-tags">Add Captions to Tag</Link>
          </RedirectionMessage>
        </Form>
      </Section>
    );
  }
}

const RedirectionMessage = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: red;

  a {
    margin-top: 10px;
    text-decoration: underline;
    display: block;
    color: red;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: none;
    }
  }
`;

AddCaption.propTypes = {
  addCap: PropTypes.func.isRequired,
  cap: PropTypes.bool.isRequired,
  tag_error: PropTypes.string.isRequired
};

const mapStateToProp = ({ caption }) => ({
  caps: caption.Isloading,
  tag_error: caption.errorMessage
});

const mapDispatchToProps = dispatch => ({
  addCap: caption => dispatch(addCaption(caption)),
  addTag: (caption, tag) => dispatch(createCaptionWithTags(caption, tag))
});

export default connect(mapStateToProp, mapDispatchToProps)(AddCaption);
