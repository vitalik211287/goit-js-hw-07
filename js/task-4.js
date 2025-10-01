const formEl = document.querySelector(".login-form");

const handlerTargetFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = formEl.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }
  const data = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(data);
  formEl.reset();
};

formEl.addEventListener("submit", handlerTargetFormSubmit);
