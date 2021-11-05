export const checkIfValuesAreEmpty = (...values) => {
  if (values.includes("")) return true;
  else return false;
};
