// /Імпорт бібліотек flatpickr та Notiflix і підключення CSS-стилів для flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// Вибір елементів
const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const spans = document.querySelectorAll('.value');

let timerId = null;
btn.disabled = true;

// Ініціалізація flatpickr
flatpickr(date, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDate]) {
    if (selectedDate <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      Notiflix.Notify.success('Lets go?');
    }
  },
});

// Додавання обробника подій до кнопки "Старт"
btn.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  toggleElementsClass();
  btn.disabled = true;
  date.disabled = true;

  // Запуск таймера
  timerId = setInterval(updateTimerDisplay, 1000);
}

function toggleElementsClass() {
  spans.forEach(item => item.classList.toggle('end'));
}

function updateTimerDisplay() {
  const choosenDate = new Date(date.value);
  const timeToFinish = choosenDate - Date.now();
  const { days, hours, minutes, seconds } = convertMs(timeToFinish);

  updateDisplay(day, days);
  updateDisplay(hour, hours);
  updateDisplay(min, minutes);
  updateDisplay(sec, seconds);

  if (timeToFinish < 1000) {
    toggleElementsClass();
    clearInterval(timerId);
    date.disabled = false;
  }
}

function updateDisplay(element, value) {
  element.textContent = addLeadingZero(value);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}