const btnElCreate = document.querySelector('button[data-create]');
const btnElDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const divEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  amount = Number(inputEl.value.trim());

  if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
    alert('Введіть ціле число від 1 до 100');
    return;
  }

  divEl.innerHTML = '';
  let size = 30;

  const parts = [];

  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();
    parts.push(
      `<div style="
        width:${size}px;
        height:${size}px;
        background-color:${color};
        margin:5px;
        display:inline-block;
      "></div>`
    );
    size += 10;
  }

  divEl.insertAdjacentHTML('beforeend', parts.join(''));
  inputEl.value = '';
};

function destroyBoxes() {
  divEl.innerHTML = '';
}

btnElCreate.addEventListener('click', createBoxes);
btnElDestroy.addEventListener('click', destroyBoxes);
