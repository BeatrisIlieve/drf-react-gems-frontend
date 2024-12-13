export const ProductImage = ({
  categoryTitle,
  colorTitle,
  firstImageUrl,
  secondImageUrl,
  clickHandler,
  firstImageIsActive,
}) => {
  return (
    <div onClick={() => clickHandler(categoryTitle, colorTitle)}>
      <img
        src={firstImageIsActive ? firstImageUrl : secondImageUrl}
        alt={`${categoryTitle}-image`}
      />
    </div>
  );
};
