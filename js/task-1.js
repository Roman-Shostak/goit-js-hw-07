const categoryItems = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(element => {
  const title = element.querySelector('h2');
  const countElements = element.querySelectorAll('li').length;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${countElements}`);
});
