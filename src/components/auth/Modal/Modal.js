import { useModal } from "../../../hooks/useModal";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../reusable/XMark/XMark";
import { Form } from "../../reusable/Form/Form";
import { InputField } from "../../reusable/InputField/InputField";
import { useForm } from "../../../hooks/useForm";

export const Modal = ({ toggleIsModalOpen, isModalOpen }) => {
  const { isTransitioning, modalRef, modalCloseHandler } = useModal({
    toggleIsModalOpen,
    isModalOpen,
  });

  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

  const updateContentIsTransitioningHandler = () => {
    setContentIsTransitioning(true);

    setTimeout(() => {
      setContentIsTransitioning(false);
    }, 400);
  };

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const { formItems, updateFormItems, submitFunction, changeHandler } = useForm(
    {
      initialValues: SHIPPING_DETAILS_FORM_ITEMS,
      userData,
    }
  );

  const submitHandler = async (e) => {
    const isFormValid = submitFunction(e);

    if (!isFormValid) {
      return;
    }

    try {
      //   await userShippingDetailsService.put(userId, userData);

      updateContentIsTransitioningHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className={`${styles["overlay"]}  ${
        displayAuthModal
          ? styles["overlay_transition-in"]
          : styles["overlay_transition-out"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={modalRef}
        className={`${styles["overlay__modal"]}  ${
          isTransitioning
            ? styles["overlay_slide-out"]
            : styles["overlay_slide-in"]
        }`}
      >
        <XMark callbackFunction={modalCloseHandler} />
        <div
          className={`${styles["form-container"]} ${
            contentIsTransitioning
              ? styles["form-container_transition-out"]
              : styles["form-container_transition-in"]
          }`}
        >
          <h1 className={styles["form-container__title"]}>{formTitle}</h1>
          <p className={styles["form-container__paragraph"]}>{formParagraph}</p>
          <Form
            buttonLabel={"Continue"}
            buttonColor={"black"}
            buttonType={"button"}
            submitHandler={submitHandler}
          >
            <InputField
              formItems={formItems}
              userData={userData}
              updateFormItems={updateFormItems}
              updateUserData={updateUserData}
            />
          </Form>
        </div>
      </div>
    </section>
  );
};
