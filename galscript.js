// Переменная для хранения текущего рейтинга
let currentRating = 0;

// Функция для оценки сердечками
function rate(rating) {
  currentRating = rating;
  const hearts = document.querySelectorAll('.heart');
  
  hearts.forEach((heart, index) => {
    if (index < rating) {
      heart.classList.add('active'); // Закрашиваем сердечки до текущего
    } else {
      heart.classList.remove('active'); // Убираем закрашенные сердечки после текущего
    }
  });
}

// Анимация появления галереи при прокрутке страницы
window.addEventListener('scroll', function() {
  const galleryRows = document.querySelectorAll('.gallery-row');
  
  galleryRows.forEach((row) => {
    const rect = row.getBoundingClientRect(); // Получаем положение элемента на экране
    if (rect.top < window.innerHeight && rect.top > 0) {
      row.classList.add('active'); // Добавляем класс для анимации появления
    }
  });
});
