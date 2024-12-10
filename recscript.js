function submitReview() {
    const reviewInput = document.querySelector('.review-input');
    const procedureInput = document.querySelector('.procedure-input');
    
    const reviewText = reviewInput.value.trim();
    const procedureText = procedureInput.value.trim();
  
    if (reviewText && procedureText) {
      const reviewsDisplay = document.querySelector('.reviews-display');
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review-alert');
      
      // Формируем текст отзыва как оповещение
      reviewElement.innerHTML = `
        <strong>ОТЗЫВ:</strong> Процедура: ${procedureText} <br>
        Впечатление: ${reviewText}
      `;
      
      reviewsDisplay.appendChild(reviewElement);
  
      // Очистка полей ввода после отправки отзыва
      reviewInput.value = '';
      procedureInput.value = '';
    } else {
      alert('Пожалуйста, заполните оба поля!');
    }
  }
  