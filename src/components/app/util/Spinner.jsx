import React from "react";
import styled from "styled-components";
import { Spin } from "../../globals/Spin";
const Spinner = () => {
  return <Spin />;
};

export default styled(Spinner)`
  max-width: 700px;
  margin: 0px auto;
`;
