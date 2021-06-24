import React from "react";
import classNames from "classnames";
import "./index.sass";

const Divider = ({ type = "horizontal" }) => {
  const dividerClassNames = classNames("Divider", {
    "Divider--horizontal": type === "horizontal",
    "Divider--vertical": type === "vertical",
  });

  return <div className={dividerClassNames} />;
};

export default Divider;
