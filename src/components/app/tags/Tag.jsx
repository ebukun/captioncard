import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tag = ({ tagline, getCap, tag_id }) => {
  return (
    <List onClick={() => getCap(tagline)}>
      <span>{tagline}</span>
    </List>
  );
};

Tag.propTypes = {
  tagline: PropTypes.string.isRequired,
  getCap: PropTypes.func.isRequired
};

const List = styled.li`
  width: 100px;
  text-align: center;
`;

export default Tag;
