document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");

  if (calculateButton) {
    calculateButton.addEventListener("click", function () {
      // Получение элементов из DOM
      const serviceType = document.querySelector("#serviceType").value;
      const guestCount = parseInt(
        document.querySelector("#hoursCount-calc").value,
        10
      );
      const djPrice = parseInt(
        document.querySelector("#dj-calc option:checked").dataset.price,
        10
      );
      const hostPrice = parseInt(
        document.querySelector("#host-calc option:checked").dataset.price,
        10
      );
      const mcPrice = parseInt(
        document.querySelector("#mc-calc option:checked").dataset.price,
        10
      );
      const artistPrice = parseInt(
        document.querySelector("#artist-calc option:checked").dataset.price,
        10
      );

      // Проверка корректности введенных данных
      if (isNaN(guestCount) || guestCount <= 0) {
        alert("Пожалуйста, введите корректное количество часов больше 0.");
        return;
      }

      // Расчет общей стоимости
      const totalCost =
        (djPrice + hostPrice + mcPrice + artistPrice) * guestCount;

      // Обновление отображения общей стоимости
      document.getElementById("totalCost").textContent =
        totalCost.toLocaleString() + "";
    });
  } else {
    console.error("Кнопка расчета отсутствует в DOM.");
  }
});
