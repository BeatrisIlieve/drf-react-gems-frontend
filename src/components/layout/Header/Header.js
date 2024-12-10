import { useState, useEffect } from "react";

import { LogoImage } from "./LogoImage/LogoImage";
import { CollectionLink } from "./CollectionLink/CollectionLink";
import { SearchButton } from "./SearchButton/SearchButton";
import { AccountLink } from "./AccountLink/AccountLink";

import { QuantityIndicatedLink } from "./reusable/QuantityIndicatedLink/QuantityIndicatedLink";

import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

export const Header = () => {
  const wishlistCount = 2;
  const bagCount = 3;

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide when scrolled past 6rem (96px) and scrolling down
      if (currentScrollY > 96 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Always show when scrolling up
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
      className={`${styles["header-container"]} ${
        isHidden ? styles["hidden"] : styles["visible"]
      }`}
    >
      <header className={styles["header"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["list"]} role="list">
            <li className={styles["list-item"]}>
              <CollectionLink label={"Earring"} url={"/earring"} />
            </li>
            <li className={styles["list-item"]}>
              <CollectionLink label={"Necklace"} url={"/necklace"} />
            </li>
            <li className={styles["list-item"]}>
              <CollectionLink label={"Pendant"} url={"/pendant"} />
            </li>
            <li className={styles["list-item"]}>
              <CollectionLink label={"Charm"} url={"/charm"} />
            </li>
            <li className={styles["list-item"]}>
              <CollectionLink label={"Bracelet"} url={"/bracelet"} />
            </li>
            <li className={styles["list-item"]}>
              <CollectionLink label={"Ring"} url={"/ring"} />
            </li>
            <li >
              <LogoImage isHidden={isHidden} />
            </li>
            <li className={styles["list-item"]}>
              <SearchButton />
            </li>
            <li className={styles["list-item"]}>
              <AccountLink />
            </li>
            <li className={styles["list-item"]}>
              <QuantityIndicatedLink
                url={"/wishlist"}
                icon={faHeart}
                quantity={wishlistCount}
              />
            </li>
            <li className={styles["list-item"]}>
              <QuantityIndicatedLink
                url={"/shopping-bag"}
                icon={faShoppingBag}
                quantity={bagCount}
              />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
