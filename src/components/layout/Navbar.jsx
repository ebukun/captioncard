import React from "react";
import styled from "styled-components";
import { setColor, media } from "./../globals/Styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/">
        {" "}
        <h1>Caption Card</h1>
      </Link>

      <ul className="nav_links">
        <li>
          <Link to="/add-cap" className="nav_link">
            Add Caption
          </Link>
        </li>
        <li>
          <Link to="/add-tags" className="nav_link">
            Add Tags
          </Link>
        </li>
        <li className="nav_link">
          <a href="#" className="nav_link">
            Contribute
          </a>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  font-family: "Cera";

  h1 {
    font-size: 20px;
    color: ${setColor.primaryColor};
  }

  a {
    text-decoration: none;
  }

  .nav_links {
    list-style: none;

    li {
      display: block;
      padding: 0px 7px;
    }
    a {
      /* transition: all 0.3s ease 0s; */
      text-decoration: none;
      color: ${setColor.primaryColor};
      font-size: 11px;
      font-weight: bold;
    }

    /* &:hover .nav_link{
      color: pink;
    } */
  }

  ${media.tablet`
  h1 {
    font-size: 30px;

  }

    
  .nav_links {
    list-style: none;

    li {
      padding: 0px 10px;
      display: inline-block;
      
    }

    a {
      font-size: 13px;
    }
  }
  `};
`;

export default Navbar;
