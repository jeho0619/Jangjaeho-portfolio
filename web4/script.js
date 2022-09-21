const items = document.querySelectorAll('.sub_text li');
items.forEach((item) => {
  item.addEventListener('click', () => {
    items.forEach((i) => {
      if (i !== item) {
        i.classList.remove('clicked');
      }
    });
    item.classList.toggle('clicked');
  });
});