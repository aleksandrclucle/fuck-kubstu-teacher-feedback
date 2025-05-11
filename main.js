for (let i = 1; i <= 14; i++) {
  const select = document.getElementById(`dynamicmodel-q${i}`);
  if (!select) {
    console.warn(`Элемент dynamicmodel-q${i} не найден`);
    continue;
  }

  // Проверка, если что-то на страничке поменяется - этот if должен отцепить это
  if (select.options.length < 10) {
    console.warn(`В dynamicmodel-q${i} меньше 10 опций`);
    continue;
  }

  // Ставим преподователю оценку 9, можете и 1, но я всегда за позитивчик
  select.selectedIndex = 9;

  select.dispatchEvent(new Event('change'));
}
