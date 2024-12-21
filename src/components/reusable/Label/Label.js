export const Label = ({ field }) => {
  return <label htmlFor={field.id}>{field.label}</label>;
};
