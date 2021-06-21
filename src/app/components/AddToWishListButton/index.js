import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../_Base";
import classNames from "classnames";
import "./index.sass";

const AddToWishlistButton = (props) => {
  const { alreadyAdded, compact, onClick } = props;

  const btnTextClassNames = classNames("AddToWishlistButton__text", {
    "AddToWishlistButton__text--gray": alreadyAdded,
  });

  // TODO: Move to Icons folder
  const WishlistIcon = () => (
    <span className="AddToWishlistButton__icon">
      <svg
        viewBox="0 0 38 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.3123 40.4996C34.2767 40.4996 33.4373 41.3391 33.4373 42.3746C33.4373 42.8974 33.2602 43.3372 32.9109 43.6822C32.5443 44.0441 32.0125 44.2538 31.4923 44.2497C30.979 44.2432 30.5624 44.0683 30.2185 43.7149L20.3437 33.567C19.9907 33.2043 19.5061 32.9996 19 32.9996C18.4939 32.9996 18.0092 33.2043 17.6563 33.567L7.7814 43.7149C7.44006 44.0657 7.02034 44.2406 6.49834 44.2498C5.9724 44.2606 5.443 44.0511 5.07896 43.6933C4.73631 43.3567 4.56259 42.924 4.56259 42.4072V7.49991C4.56259 5.43216 6.24484 3.74991 8.31259 3.74991H29.6873C31.7551 3.74991 33.4373 5.43216 33.4373 7.49991V33.0934C33.4373 34.1289 34.2767 34.9684 35.3123 34.9684C36.3479 34.9684 37.1873 34.1289 37.1873 33.0934V7.49991C37.1872 3.3645 33.8228 0 29.6873 0H8.31259C4.17709 0 0.812683 3.3645 0.812683 7.49991V42.4072C0.812683 43.9236 1.3945 45.3303 2.45087 46.3682C3.50968 47.4084 4.9675 48 6.4645 48C6.49778 48 6.53115 47.9997 6.56443 47.9992C8.08234 47.9724 9.43243 47.3953 10.4689 46.33L19 37.5631L27.5311 46.33C28.5751 47.4029 29.9284 47.9801 31.4448 47.9993C32.967 48.015 34.465 47.4177 35.5457 46.3505C36.6043 45.3052 37.1872 43.8932 37.1872 42.3746C37.1873 41.3391 36.3479 40.4996 35.3123 40.4996Z"
          fill="white"
        />
      </svg>
    </span>
  );

  return (
    <BaseButton
      className="AddToWishlistButton"
      leadingElement={<WishlistIcon />}
      onClick={onClick}
    >
      {!compact && (
        <span className={btnTextClassNames}>
          {`Add${alreadyAdded ? "ed" : ""} to Wishlist`}
        </span>
      )}
    </BaseButton>
  );
};

AddToWishlistButton.propTypes = {
  alreadyAdded: PropTypes.bool,
  compact: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AddToWishlistButton;
