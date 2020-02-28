import styled from "styled-components";

import { setColor } from "./Styles";

const SelectInput = styled.select`
  border: none;
  border-bottom: 1px solid ${setColor.primaryColor};
  width: 300px;
  margin-bottom: 50px;
  padding: 30px 0px;
  outline: none;
  color: ${setColor.primaryColor};
`;

export default SelectInput;
