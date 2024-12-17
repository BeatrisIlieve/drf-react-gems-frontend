import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import { Greeting } from "./Greeting/Greeting";
import { InfoParagraph } from "./InfoParagraph/InfoParagraph";
import { Nav } from "./Nav/Nav";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";

import styles from "./Account.module.scss";

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <header className={styles["account__header"]}>
        <ProfilePicture />
        <Greeting />
        <InfoParagraph />
        <Nav />
      </header>
      <ShippingDetails />
    </section>
  );
};
