import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../_Base";
import { WishlistIcon } from "../Icons";
import classNames from "classnames";
import "./index.sass";

const AddToWishlistButton = (props) => {
  const { alreadyAdded, compact, onClick } = props;

  const btnContentClassNames = classNames("content", {
    active: alreadyAdded,
  });

  const LeadingIcon = () => (
    <span className="leading-icon">
      <WishlistIcon />
    </span>
  );

  return (
    <BaseButton
      className="AddToWishlistButton"
      leadingElement={<LeadingIcon />}
      onClick={onClick}
    >
      {!compact && (
        <span className={btnContentClassNames}>
          {`Add${alreadyAdded ? "ed" : ""} to Wishlist`}
        </span>
      )}
    </BaseButton>
  );
};

AddToWishlistButton.propTypes = {
  alreadyAdded: PropTypes.bool,
  compact: PropTypes.bool, // Minimal version that shows only the icon
  onClick: PropTypes.func,
};

export default AddToWishlistButton;
