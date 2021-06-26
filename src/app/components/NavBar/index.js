import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../Container";
import { routes } from "../../constants";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import "./index.sass";

const NavBar = ({ items }) => (
  <nav className="NavBar">
    <Container className="container">
      <Link className="logo" to={routes.HOME.path}>
        <Logo />
      </Link>
      {items.map((item) => (
        <Link className="link" key={item.path} to={item.path}>
          {item.icon && item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </Container>
  </nav>
);

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};

export default NavBar;
