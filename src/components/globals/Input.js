import styled from "styled-components";
import { setColor, media } from "./Styles";

const Input = styled.input`
  border: none;
  border-radius: 50px;
  border: 1px solid ${setColor.mainBlue};
  outline: none;
  padding: 10px 20px;
  font-size: 15px;

  ${media.tablet`
    width: 485px;
    padding: 20px 100px 20px 60px;
  `};
`;

export const InputLine = styled.input`
  border: none;
  border-bottom: 1px solid #2200bd;
  width: 300px;
  /* margin: auto; */
  margin-bottom: ${props => (props.margin ? props.margin : "20px")};
  padding: 30px 0px;
  outline: none;
  color: ${setColor.primaryColor};
`;

export default Input;
