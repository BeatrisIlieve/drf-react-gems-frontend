// import { useState } from "react";

// import { NavLink } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBagShopping,
//   faUser,
//   faGem,
//   faHeart,
// } from "@fortawesome/free-solid-svg-icons";

// import "./Header.scss";
// import { LINK_TITLES } from "./constants/link_titles";

// export const Header = () => {
//   const wishlistCount = 2;

//   return (
//     <header>
//       <nav>
//         <ul role="list">
//           <li>
//             <NavLink
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/collection"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faGem} />
//               </div>
//               Collection
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/wishlist"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faHeart} />
//                 <span>{wishlistCount}</span>
//               </div>
//               Wishlist
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/shopping-bag"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faBagShopping} />
//                 <span>{wishlistCount}</span>
//               </div>
//               My Bag
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/account"}
//             >
//                 <div>
//               <FontAwesomeIcon icon={faUser} />
//               </div>
//               Account
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// import { useState } from "react";

// import { NavLink, Link } from "react-router-dom";
// import { LogoImage } from "./LogoImage/LogoImage";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBagShopping,
//   faUser,
//   faGem,
//   faHeart,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";

// import styles from "./Header.module.scss";
// import { LINK_TITLES } from "./constants/link_titles";

// export const Header = () => {
//   const wishlistCount = 2;
//   const bagCount = 3;

//   return (
//     <header>
//       <LogoImage />
//       <nav>
//         <ul role="list">
//           <li>
//             <NavLink
//               end
//               className={({ isActive }) =>
//                 isActive ? styles["selected"] : styles["not-selected"]
//               }
//               to={"/collection"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faGem} />
//               </div>
//               Collection
//             </NavLink>
//           </li>
//           <li>
//             <div>
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </div>
//             Search
//           </li>
//           <li>
//             <Link
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/wishlist"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faHeart} />
//                 <span>{wishlistCount}</span>
//               </div>
//             </Link>
//           </li>
//           <li>
//             <Link
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/shopping-bag"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faBagShopping} />
//                 <span>{bagCount}</span>
//               </div>
//             </Link>
//           </li>
//           <li>
//             <Link
//               end
//               className={({ isActive }) =>
//                 isActive ? "selected" : "not-selected"
//               }
//               to={"/account"}
//             >
//               <div>
//                 <FontAwesomeIcon icon={faUser} />
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

import { useState } from "react";

import { LogoImage } from "./LogoImage/LogoImage";
import { CollectionLink } from "./CollectionLink/CollectionLink";
import { SearchButton } from "./SearchButton/SearchButton";
import { AccountLink } from "./AccountLink/AccountLink";

import { QuantityIndicatedLink } from "./reusable/QuantityIndicatedLink/QuantityIndicatedLink";

import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";

export const Header = () => {
  const wishlistCount = 2;
  const bagCount = 3;

  return (
    <header>
      <LogoImage />
      <nav>
        <ul role="list">
          <li>
            <CollectionLink />
          </li>
          <li>
            <SearchButton />
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
          <li>
            <AccountLink />
          </li>
        </ul>
      </nav>
    </header>
  );
};
