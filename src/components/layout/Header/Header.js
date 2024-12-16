import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoImage } from "./LogoImage/LogoImage";
import { CollectionLink } from "./CollectionLink/CollectionLink";
import { SearchButton } from "./SearchButton/SearchButton";
import { AccountButton } from "./AccountButton/AccountButton";
import { ProductSetDiscount } from "./ProductSetDiscount/ProductSetDiscount";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { QuantityIndicatedLink } from "./reusable/QuantityIndicatedLink/QuantityIndicatedLink";
import { Auth } from "../../modals/Auth/Auth";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();
  const wishlistCount = 2;
  const bagCount = 3;

  const { isAuthenticated } = useAuthenticationContext();

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 160 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [displayAuthModal, setDisplayAuthModal] = useState(false);

  const openAuthModalClickHandler = () => {
    if (isAuthenticated) {
      navigate("/account");
    }
    setDisplayAuthModal(true);
  };

  const closeAuthModalClickHandler = () => {
    setDisplayAuthModal(false);
  };

  return (
    <>
      {displayAuthModal && !isAuthenticated && (
        <Auth
          closeAuthModalClickHandler={closeAuthModalClickHandler}
          displayAuthModal={displayAuthModal}
        />
      )}
      <div
        className={`${styles["container"]} ${
          isHidden ? styles["container_hidden"] : styles["container_visible"]
        }`}
      >
        <ProductSetDiscount />
        <header className={styles["container__header"]}>
          <nav className={styles["container__nav"]}>
            <CollectionLink />
            <LogoImage />
            <div className={styles["container__buttons"]}>
              <SearchButton />
              <AccountButton
                openAuthModalClickHandler={openAuthModalClickHandler}
              />
              <QuantityIndicatedLink
                url={"/wishlist"}
                icon={faHeart}
                quantity={wishlistCount}
              />
              <QuantityIndicatedLink
                url={"/shopping-bag"}
                icon={faShoppingBag}
                quantity={bagCount}
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
