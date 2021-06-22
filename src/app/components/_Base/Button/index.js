import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./index.sass";

const Button = (props) => {
  const {
    children,
    className,
    leadingElement,
    onClick,
    trailingElement,
  } = props;

  const handleClick = () => onClick && onClick();

  const btnClassNames = classNames("Button", className);

  return (
    <button className={btnClassNames} onClick={handleClick}>
      {leadingElement && leadingElement}
      {children}
      {trailingElement && trailingElement}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  leadingElement: PropTypes.node,
  onClick: PropTypes.func,
  trailingElement: PropTypes.node,
};

export default Button;
