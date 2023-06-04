// Вибір елемента body
const bodyChangeColor = document.querySelector('body');

// Вибір кнопок "Старт" і "Стоп"
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

// Змінна для зберігання ідентифікатора інтервалу
let intervalId = null;

// Ф-я для генераціїкольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Встановлення атрибута "disabled" для кнопки "Стоп"
buttonStop.setAttribute('disabled', '');

// Додавання обробника подій до кнопки "Старт"
buttonStart.addEventListener('click', element => {
  
  // Вимкнення кнопки "Старт" і увімкнення кнопки "Стоп"
  element.target.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');

  // Початок зміни кольору фону з заданим інтервалом
  intervalId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Додавання обробника подій до кнопки "Стоп"
buttonStop.addEventListener('click', element => {
  // Вимкнення кнопки "Стоп" і увімкнення кнопки "Старт"
  element.target.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');

  // Зупинка зміни кольору фону
  clearInterval(intervalId);
});