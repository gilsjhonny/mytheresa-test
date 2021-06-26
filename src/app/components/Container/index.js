import React from "react";
import classNames from "classnames";
import "./index.sass";

const Container = ({ children, className }) => (
  <div className={classNames("Container", className)}>{children}</div>
);

export default Container;
