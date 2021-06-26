import React from "react";
import PropTypes from "prop-types";
import { ClapperBoardIcon } from "../Icons";
import "./index.sass";

const CategoryTitle = (props) => {
  const { children } = props;

  return (
    <h2 className="CategoryTitle">
      <ClapperBoardIcon /> {children}
    </h2>
  );
};

CategoryTitle.propTypes = {
  children: PropTypes.node,
};

export default CategoryTitle;
