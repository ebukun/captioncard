import styled from "styled-components";
import { setColor } from "./Styles";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SectionWrap = styled.div`
  max-width: 850px;
  margin: 0 auto;

  h4 {
   margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 15px;
    color: ${setColor.primaryColor};
  }
`;

export default Section;
