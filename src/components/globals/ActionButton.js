import styled from "styled-components";
import { setColor } from "./Styles";

export default styled.button`
  background-color: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  font-size: 18px;
  padding: 20px 50px;
  border: 2px solid ${setColor.primaryColor};
  transition: all 0.3s ease-in-out;
  font-family: "Cera Pro";

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;
