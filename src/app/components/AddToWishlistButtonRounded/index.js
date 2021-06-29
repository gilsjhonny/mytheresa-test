import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../_Base";
import classNames from "classnames";
import "./index.sass";

// For the sake of having a different Wishlist button
// even if it's redundant
const AddToWishlistButtonRounded = (props) => {
  const { alreadyAdded, onClick } = props;

  const btnContentClassNames = classNames("content", {
    active: alreadyAdded,
  });

  return (
    <BaseButton
      className="AddToWishlistButtonRounded"
      onClick={onClick}
    >
      <span className={btnContentClassNames}>
        {`Add${alreadyAdded ? "ed" : ""} to Wishlist`}
      </span>
    </BaseButton>
  );
};

AddToWishlistButtonRounded.propTypes = {
  alreadyAdded: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AddToWishlistButtonRounded;
