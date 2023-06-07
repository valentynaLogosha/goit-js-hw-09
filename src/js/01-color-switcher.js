// Вибір елемента body
const bodyChangeColor = document.querySelector('body');

// Вибір кнопок "Старт" і "Стоп"
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

// Змінна для зберігання ідентифікатора інтервалу
let intervalId = null;

// Ф-я для генерації кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функція для встановлення атрибута "disabled" і зняття атрибута "disabled" з кнопок
function setButtonState(startButton, stopButton, disabled) {
  startButton.setAttribute('disabled', disabled);
  stopButton.removeAttribute('disabled');
}

// Встановлення атрибута "disabled" для кнопки "Стоп"
buttonStop.setAttribute('disabled', '');

// Обробник подій для кнопок "Старт" і "Стоп"
function handleButtonClick(event) {
  const clickedButton = event.target;
  if (clickedButton === buttonStart) {
    setButtonState(buttonStart, buttonStop, true);
    intervalId = setInterval(() => {
      bodyChangeColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
  } else if (clickedButton === buttonStop) {
    setButtonState(buttonStop, buttonStart, true);
    clearInterval(intervalId);
  }
}

// Додавання обробника подій до кнопок "Старт" і "Стоп"
buttonStart.addEventListener('click', handleButtonClick);
buttonStop.addEventListener('click', handleButtonClick);