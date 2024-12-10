// import styles from "./Collection.module.scss";

// export const Collection = () => {
//   return (
//     <section className={styles["collection"]}>
//       <article>
//         <div>
//           <img
//             src="https://res.cloudinary.com/deztgvefu/image/upload/v1726330964/forget-me-not-collection/miniImages/hero-mobile_k83pfc.jpg"
//             alt="forget-me-not-collection"
//           />
//         </div>
//         <div>
//           <h2>Forget-Me-Not Collection</h2>
//           <p>
//             A series of fine jewelry designs that celebrate the endless beauty
//             of nature’s greatest gifts – rare gemstones and flowers in bloom.
//           </p>
//           <div>
//           <h4>by</h4>
//           <h4>by</h4>
//             <div>
    
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif"
//                 alt=""
//               />
 
//             </div>

//             <div>
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_2_k7nhpe.avif"
//                 alt=""
//               />
              
//             </div>
//             <h4>by</h4>
//             <h4>by</h4>
//           </div>
//         </div>
//       </article>
//       <article>
//         <div>
//           <img
//             src="https://res.cloudinary.com/deztgvefu/image/upload/v1733797275/forget-me-not-collection/miniImages/fifty_pdp_forget-me-not_b_rqlq6j.avif"
//             alt="forget-me-not-collection"
//           />
//         </div>
//         <div>
//           <h2 className={styles["second"]}>Line of delicate jewels</h2>
//           <p className={styles["second"]}>
//             Exquisite medley of round brilliant, pear-shaped and marquise
//             diamonds that together reveal the beautiful flower.
//           </p>
//           <div>
//             <div>
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-1_u0gwpv.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-2_vtkyhb.webp"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </article>
//       <article>
//         <div>
//           <img
//             src="https://res.cloudinary.com/deztgvefu/image/upload/v1733797275/forget-me-not-collection/miniImages/fifty_pdp_forget-me-not_a_fcpwwq.avif"
//             alt="forget-me-not-collection"
//           />
//         </div>
//         <div>
//           <h2>Bringing a fresh perspective</h2>
//           <p>
//             Necklace, pendant, earring, bracelet, ring and charm - each design
//             adds an unparalleled warmth and radiance to any occasion.
//           </p>
//           <div>
//             <div>
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1733806120/forget-me-not-collection/charms/forget_me_not_charm_diamond_and_pink_sapphire_cmpsprfflrfmn_e-2_xteknd.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://res.cloudinary.com/deztgvefu/image/upload/v1733801928/forget-me-not-collection/stud_earrings/forget_me_not_diamond_pendant_pedprfflrfmn_e-1h_s77l1q.webp"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </article>
//     </section>
//   );
// };


import styles from "./Collection.module.scss";

const products = [
    { price: "$50", image: "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif", quantity: 10 },
    { price: "$75", image: "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif", quantity: 5 },
  ];
export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      <article>
        <div>
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1733797275/forget-me-not-collection/miniImages/fifty_pdp_forget-me-not_a_fcpwwq.avif"
            alt="forget-me-not-collection"
          />
        </div>
        <div>
          <h2>Bringing a fresh perspective</h2>
          <p>
            Necklace, pendant, earring, bracelet, ring and charm - each design
            adds an unparalleled warmth and radiance to any occasion.
          </p>
          <div className={styles.container}>
      {products.map((product, index) => (
        <div key={index} className={styles.column}>
          {/* Price Row */}
          <div className={styles.row}>{product.price}</div>
          
          {/* Image Row */}
          <div className={`${styles.row} ${styles.image}`}>
            <img src={product.image} alt={`Product ${index}`} />
          </div>
          
          {/* Quantity Row */}
          <div className={styles.row}>{product.quantity} available</div>
        </div>
      ))}
    </div>
        </div>
      </article>
    </section>
  );
};
