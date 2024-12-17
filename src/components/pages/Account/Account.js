import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import { Greeting } from "./Greeting/Greeting";
import { InfoParagraph } from "./InfoParagraph/InfoParagraph";

import styles from "./Account.module.scss"

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <ProfilePicture />
      <Greeting />
      <InfoParagraph />
    </section>
  );
};
