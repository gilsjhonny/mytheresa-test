import React from "react";
import classNames from "classnames";
import "./index.sass";

const PageContainer = ({ children, className }) => (
  <div className={classNames("PageContainer", className)}>
    {children}
  </div>
);

export default PageContainer;
