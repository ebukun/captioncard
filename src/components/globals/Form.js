import styled from "styled-components";
import { setColor } from "./Styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${setColor.mainWhite};
  padding: 200px 100px;
`;

export default Form;
