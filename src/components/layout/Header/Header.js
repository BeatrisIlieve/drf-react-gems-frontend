import { useState } from "react";

import { LogoImage } from "./LogoImage/LogoImage";
import { CollectionLink } from "./CollectionLink/CollectionLink";
import { SearchButton } from "./SearchButton/SearchButton";
import { AccountLink } from "./AccountLink/AccountLink";

import { QuantityIndicatedLink } from "./reusable/QuantityIndicatedLink/QuantityIndicatedLink";

import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";

// export const Header = () => {
//   const wishlistCount = 2;
//   const bagCount = 3;

//   return (
//     <header>
//       <LogoImage />
//       <nav>
//         <ul role="list">
//           <li>
//             <CollectionLink />
//           </li>
//           <li>
//             <SearchButton />
//           </li>
//           <li>
//             <AccountLink />
//           </li>
//           <li>
//             <QuantityIndicatedLink
//               url={"/wishlist"}
//               icon={faHeart}
//               quantity={wishlistCount}
//             />
//           </li>
//           <li>
//             <QuantityIndicatedLink
//               url={"/shopping-bag"}
//               icon={faShoppingBag}
//               quantity={bagCount}
//             />
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export const Header = () => {
  const wishlistCount = 2;
  const bagCount = 3;

  return (
    <header>
      <LogoImage />
      <nav>
        <ul role="list">
          <li>
            <CollectionLink label={"Earring"} url={"/earring"}/>
          </li>
          <li>
            <CollectionLink label={"Necklace"} url={"/necklace"}/>
          </li>
          <li>
            <CollectionLink label={"Pendant"} url={"/pendant"}/>
          </li>
          <li>
            <CollectionLink label={"Charm"} url={"/charm"}/>
          </li>
          <li>
            <CollectionLink label={"Bracelet"} url={"/bracelet"}/>
          </li>
          <li>
            <CollectionLink label={"Ring"} url={"/ring"}/>
          </li>
          <li>
            <SearchButton />
          </li>
          <li>
            <AccountLink />
          </li>
          <li>
            <QuantityIndicatedLink
              url={"/wishlist"}
              icon={faHeart}
              quantity={wishlistCount}
            />
          </li>
          <li>
            <QuantityIndicatedLink
              url={"/shopping-bag"}
              icon={faShoppingBag}
              quantity={bagCount}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
