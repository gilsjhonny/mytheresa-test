import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { WishlistIcon } from "../Icons";
import { routes } from "../../constants";
import "./index.sass";

const PageLayout = ({ children }) => {
  const wishlistNavItem = {
    ...routes.WISHLIST,
    icon: <WishlistIcon />,
  };

  return (
    <div className="PageLayout">
      <NavBar items={[wishlistNavItem]} />
      <main className="pageBody">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
