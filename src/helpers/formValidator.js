const formValidator = (formData) => {
  const {
    name, age, email, password, terms,
  } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  if (
    name.length < 3
    || age < 12
    || !emailRegex.test(email)
    || password.length < 6
    || !terms) return true
  return false;
};

export default formValidator;
