(function () {
  const option = document.querySelectorAll('[data-option]');
  const titleText = document.querySelector('[data-title]');

  const dropText = function (text) {
    title.innerHTML = text;
  };
  const dropDown = document.createElement('div');
  dropDown.classList.add('DropDown');
  document.body.appendChild(dropDown);

  const title = document.createElement('div');
  title.classList.add('DropDown__title');
  title.setAttribute('data-btn', 'title');
  dropDown.appendChild(title);
  title.innerHTML = titleText.value;

  const selectItem = document.createElement('div');
  selectItem.classList.add('DropDown__items');
  selectItem.classList.add('hide');
  dropDown.appendChild(selectItem);

  for (let j = 0; j < option.length; j++) {
    const item = document.createElement('div');
    item.classList.add('DropDown__item');
    item.innerHTML = option[j].value;
    selectItem.appendChild(item);

    item.addEventListener('click', () => {
      dropText(option[j].value);
      selectItem.classList.add('hide');
    });
  }
  const dropDownBtn = document.querySelector('[data-btn=title]');
  dropDownBtn.addEventListener('click', () => {
    if (selectItem.classList.contains('hide')) {
      selectItem.classList.remove('hide');
    } else {
      selectItem.classList.add('hide');
    }
  });
}());
