import React from "react";
import { ReactComponent as ClapperBoardIcon } from "../../assets/clapperboard.svg";
import "./index.sass";

const CategoryTitle = (props) => {
  const { children } = props;

  return (
    <h2 className="CategoryTitle">
      <ClapperBoardIcon /> {children}
    </h2>
  );
};

export default CategoryTitle;
