import React, { Component } from "react";
import Section from "../../globals/Section";
import { InputLine } from "./../../globals/Input";
import Form from "./../../globals/Form";
import ActionButton from "./../../globals/ActionButton";
import { connect } from "react-redux";
import { addCaption, createCaptionWithTags } from "../../../redux/actions/captions.action";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectInput from "../../globals/SelectInput";
import { tag } from "../../../redux/actions/tags.action";
import PropTypes from "prop-types";

class AddCaptionTag extends Component {
  state = {
    caption: "",
    tags: ""
  };

  componentDidMount() {
    this.props.getTag();
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  CreateCaption = e => {
    e.preventDefault();

    const { caption, tags } = this.state;

    if (caption.trim() === "") return;
    if (tags.trim() === "") return;

    this.props.addTag(caption, tags);

    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    const { caption, tags } = this.state;
    return (
      <Section>
        <Form onSubmit={this.CreateCaption}>
          <label style={{ textAlign: "center", fontSize: "15px" }} htmlFor="caption">
            ADD CAPTION TO TAGS
          </label>
          <InputLine type="text" id="caption" placeholder="Enter Caption" onChange={this.onChange} value={caption} margin={"50px"} />
          <SelectInput id="tags" onChange={this.onChange} value={tags}>
            <option defaultValue>Select Role</option>
            {this.props.tag.map(tagg => (
              <option value={tagg} key={Math.random()}>
                {tagg}
              </option>
            ))}
          </SelectInput>
          <ActionButton type="submit" value="Submit" disable={this.props.loading}>
            {this.props.loading ? "Processing..." : "Submit"}
          </ActionButton>
          <RedirectionMessage>
            Want to add Captions Only
            <Link to="/add-cap">Add Captions</Link>
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

AddCaptionTag.propTypes = {
  addTag: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  tag_error: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired,
  getTag: PropTypes.func.isRequired
};

const mapStateToProp = ({ caption, tag }) => ({
  loading: caption.isSending,
  tag_error: caption.errorMessage,
  tag: tag.tags
});

const mapDispatchToProps = dispatch => ({
  addTag: (caption, tag) => dispatch(createCaptionWithTags(caption, tag)),
  getTag: () => dispatch(tag())
});

export default connect(mapStateToProp, mapDispatchToProps)(AddCaptionTag);
