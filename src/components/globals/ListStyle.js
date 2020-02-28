import styled from "styled-components";
import { setColor } from "./Styles";

const ListStyle = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    padding: 0px 10px;
  }
`;

export const ListButton = styled(ListStyle)`
  li {
    background-color: ${setColor.primaryColor};
    font-size: 12px;
    color: #fff;
    margin: 0px 10px 9px 10px;
    padding: 10px 20px;
    border-radius: 15px;
    background-image: linear-gradient(to right, #6253e1, #852d91, #a3a1ff, #f24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
    cursor: pointer;
    font-weight: 600;
    color: #fff;
    border: none;
    background-size: 300% 100%;
    transition: all 0.4s ease-out;

    &:hover {
      background: transparent;
      color: ${setColor.primaryColor};
    }
  }
`;

export default ListStyle;
