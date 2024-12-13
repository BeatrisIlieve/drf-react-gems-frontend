import { useState, useEffect } from "react";

import { LogoImage } from "./LogoImage/LogoImage";
import { CollectionLink } from "./CollectionLink/CollectionLink";
import { SearchButton } from "./SearchButton/SearchButton";
import { AccountLink } from "./AccountLink/AccountLink";

import { QuantityIndicatedLink } from "./reusable/QuantityIndicatedLink/QuantityIndicatedLink";

import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";



export const Header = () => {
  const wishlistCount = 2;
  const bagCount = 3;

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 96 && currentScrollY > lastScrollY) {
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

  return (
    <div
      className={`${styles["container"]} ${
        isHidden ? styles["container_hidden"] : styles["container_visible"]
      }`}
    >
      <header className={styles["container__header"]}>
        <nav className={styles["container__nav"]}>
          <CollectionLink/>
          <LogoImage isHidden={isHidden} />
          <SearchButton />
          <AccountLink />
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
        </nav>
      </header>
    </div>
  );
};
