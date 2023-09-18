// Manipulate the DOM. Selected list item has different styles attached. If another list item has already been selected, removes the styling on the previously selected item
const listItems = document.querySelectorAll('.list-items');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(item => item.classList.remove('selected'));
    item.classList.add('selected');
  });
});
