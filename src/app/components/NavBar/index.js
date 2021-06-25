import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as WishlistIcon } from "../../assets/wishlist.svg";
import "./index.sass";

const NavBar = ({ routes }) => {
  return (
    <nav className="NavBar">
      <PageContainer className="NavBar__container">
        <Link className="NavBar__logo" to="/">
          <Logo />
        </Link>
        {routes.map((route) => (
          <Link className="NavBar__link" to={route.path}>
            <WishlistIcon className="NavBar__link__icon" />
            <span>{route.name}</span>
          </Link>
        ))}
      </PageContainer>
    </nav>
  );
};

export default NavBar;
