
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-images img');

    // Ограничиваем индекс в пределах доступных слайдов
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Скрываем все слайды
    slides.forEach((slide) => slide.classList.remove('active'));

    // Показываем текущий слайд
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Инициализация первого слайда
showSlide(currentSlide);
setInterval(() => {
    nextSlide();
}, 5000); // Переключение каждые 3 секунды



// Функция для открытия первого модального окна
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Показываем модальное окно
}

// Функция для закрытия первого модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}

// Функция для открытия второго модального окна
function openModal1() {
    const leegend = document.getElementById('leegend');
    leegend.style.display = 'flex'; // Показываем второе модальное окно
}

// Функция для закрытия второго модального окна
function closeModal1() {
    const leegend = document.getElementById('leegend');
    leegend.style.display = 'none'; // Скрываем второе модальное окно
}

// Закрытие модальных окон при клике вне их содержимого
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    const leegend = document.getElementById('leegend');

    // Закрываем первое окно
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    // Закрываем второе окно
    if (event.target === leegend) {
        leegend.style.display = 'none';
    }
};
const titleText = document.querySelector('.title-text');
titleText.style.marginTop = '5px'; // Уменьшаем отступ сверху
titleText.style.marginBottom = '5px'; // Уменьшаем отступ снизу