// Открытие модального окна при клике на кнопку "Заказать"
document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("orderModal").style.display = "block";
  });
});

// Закрытие модального окна при клике на крестик
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("orderModal").style.display = "none";
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("orderModal")) {
    document.getElementById("orderModal").style.display = "none";
  }
});

// Обработка подтверждения заказа
document
  .getElementById("confirmOrderButton")
  .addEventListener("click", function () {
    const dj = document.getElementById("dj").value;
    const host = document.getElementById("host").value;
    const mc = document.getElementById("mc").value;
    const artist = document.getElementById("artist").value;
    const hours = document.getElementById("hoursCount").value;

    console.log(
      `Выбрано: Диджей - ${dj}, Ведущий - ${host}, МС - ${mc}, Артист - ${artist}, Количество часов - ${hours}`,
    );

    // Закрытие модального окна
    document.getElementById("orderModal").style.display = "none";
  });
