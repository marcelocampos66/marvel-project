const formValidator = (formData) => {
  const {
    name, age, email, password,
  } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  if (
    name.length < 3
    || age < 12
    || !emailRegex.test(email)
    || password.length < 6
  ) return true
  return false;
};

export default formValidator;
