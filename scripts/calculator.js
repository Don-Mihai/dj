document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");

  if (calculateButton) {
    calculateButton.addEventListener("click", function () {
      const elements = {
        serviceType: document.getElementById("serviceType"),
        // guestCount: document.getElementById("guestCount"), // Не понятно почему не работает. ( ошибка в консоли.)
        packageType: document.querySelector('input[name="package"]:checked'),
        photography: document.getElementById("photography"),
        video: document.getElementById("video"),
        music: document.getElementById("music"),
        totalCost: document.getElementById("totalCost"),
      };

      // Проверка существования всех необходимых элементов
      for (const key in elements) {
        if (!elements[key]) {
          console.error(
            `Element with id/name "${key}" is missing from the DOM.`
          );
          return;
        }
      }

      const serviceType = elements.serviceType.value;
      const guestCount = parseInt(elements.guestCount.value, 10);
      const packageType = elements.packageType.value;
      const photography = elements.photography.checked;
      const video = elements.video.checked;
      const music = elements.music.checked;

      // Базовые цены для пакетов
      const packagePrices = {
        basic: 1000,
        standard: 2000,
        premium: 3000,
      };

      // Дополнительные услуги
      const extraServices = {
        photography: 5000,
        video: 7000,
        music: 8000,
      };

      // Начальная стоимость
      let totalCost = 0;

      // Стоимость пакета
      totalCost += packagePrices[packageType] * guestCount;

      // Дополнительные услуги
      if (photography) {
        totalCost += extraServices.photography;
      }
      if (video) {
        totalCost += extraServices.video;
      }
      if (music) {
        totalCost += extraServices.music;
      }

      // Вывод общей стоимости
      elements.totalCost.textContent = totalCost;
    });
  } else {
    console.error("Calculate button is missing from the DOM.");
  }
});
