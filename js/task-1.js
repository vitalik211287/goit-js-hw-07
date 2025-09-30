const navElAll = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${navElAll.length} `);

navElAll.forEach(el => {
  const category = el.firstElementChild;
  const elements = category.nextElementSibling;

  console.log(
    `Category: ${category.textContent} \nElements: ${elements.children.length}`
  );
});
