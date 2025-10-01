const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const handlerTargetInput = () => {
  const trimmedValue = inputEl.value.trim();
  spanEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
};

inputEl.addEventListener("input", handlerTargetInput);
