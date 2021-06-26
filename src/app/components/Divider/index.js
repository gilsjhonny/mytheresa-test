import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.sass";

const Divider = ({ type = "horizontal" }) => {
  const dividerClassNames = classNames("Divider", {
    "Divider--horizontal": type === "horizontal",
    "Divider--vertical": type === "vertical",
  });

  return <div className={dividerClassNames} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
